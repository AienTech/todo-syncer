import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { Status } from 'src/@generated';
import { ApiService } from 'src/mock-third-party/api/api.service';
import { Todo } from 'src/mock-third-party/mock-third-party.interface';
import { MsGraphService } from 'src/ms-graph/ms-graph.service';
import { MutexService } from 'src/mutex/mutex.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TodoService {
  private readonly logger = new Logger(TodoService.name);

  constructor(
    private readonly msService: MsGraphService,
    private readonly mutexService: MutexService,
    private readonly prismaService: PrismaService,
    private readonly apiService: ApiService,
  ) {}

  getTodos() {
    try {
      return this.msService.client.api('/me/todo/lists');
    } catch (err) {
      Logger.error(err);
    }
  }

  mapStatus(status: string | Status): Status {
    switch (status) {
      case 'TO_DO':
      case Status.TO_DO:
        return Status.TO_DO;
      case 'ON_GOING':
      case Status.ON_GOING:
        return Status.ON_GOING;
      case 'DONE':
      case Status.DONE:
        return Status.DONE;
      default:
        return Status.TO_DO;
    }
  }

  @Cron('0/5 * * * * *')
  async sync() {
    if (this.mutexService.mutex.isLocked()) {
      this.logger.log('previous job still running. skipping this iteration');
      return;
    }

    await this.mutexService.mutex.runExclusive(async () => {
      try {
        this.logger.log('started todo sync cron job');

        const localTodos = await this.prismaService.todo.findMany();

        const { data: lists } = await this.apiService.getAllLists();

        const response = await Promise.all(
          lists.map((l) => this.apiService.getAllTodos(l.id)),
        );
        const remoteTodos: Todo[] = response.flatMap(({ data }) => data);

        // Check for todos that exist remotely but not in local and add them to the local
        for (const remoteTodo of remoteTodos) {
          const localTodo = localTodos.find(
            (t) => t.integrationId === remoteTodo.id,
          );

          if (!localTodo) {
            this.logger.log(`synchronising ${remoteTodo.id} with local db`);
            await this.prismaService.todo.create({
              data: {
                integrationId: remoteTodo.id,
                title: remoteTodo.title,
                description: remoteTodo.body.content,
                status: this.mapStatus(remoteTodo.status),
                updatedAt: new Date(remoteTodo.lastModifiedDateTime),
                list: {
                  connectOrCreate: {
                    create: {
                      title: 'NO LIST',
                      integrationId: 'NO_LIST',
                    },
                    where: {
                      integrationId: 'NO_LIST',
                    },
                  },
                },
              },
            });
          } else {
            if (
              new Date(localTodo.updatedAt) <
              new Date(remoteTodo.lastModifiedDateTime)
            ) {
              this.logger.log(`synchronising ${localTodo.id} with local db`);
              await this.prismaService.todo.update({
                where: { id: localTodo.id },
                data: {
                  title: remoteTodo.title,
                  description: remoteTodo.body.content,
                  status: this.mapStatus(remoteTodo.status),
                  updatedAt: new Date(remoteTodo.lastModifiedDateTime),
                },
              });
            }
            // If needed, you can also add an else block to update the remote todo if the local one is newer.
          }
        }

        // Check for todos that exist locally but not in remote and add them to the remote
        for (const localTodo of localTodos) {
          if (
            !remoteTodos.some(
              (remoteTodo) => remoteTodo.id === localTodo.integrationId,
            )
          ) {
            this.logger.log(`synchronising ${localTodo.id} with remote db`);
            await this.apiService.createTodo(
              (localTodo.listId || 0).toString(),
              {
                '@odata.type': '#microsoft.graph.todoTask',
                id: localTodo.integrationId,
                body: {
                  '@odata.type': 'microsoft.graph.itemBody',
                  content: localTodo.description,
                },
                status: this.mapStatus(localTodo.status),
                title: localTodo.title,
                createdDateTime: localTodo.createdAt.toString(),
                lastModifiedDateTime: localTodo.updatedAt.toString(),
                bodyLastModifiedDateTime: localTodo.updatedAt.toString(),
              },
            );
          }
        }

        this.logger.log('finished todo sync cron job');
      } catch (error) {
        this.logger.error('error during todo sync cron job', error);
      }
    });
  }
}
