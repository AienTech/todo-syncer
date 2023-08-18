import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
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
        const todos: Todo[] = response.flatMap(({ data }) => data);

        //console.log({ todos, localTodos });

        this.logger.log('finished todo sync cron job');
      } catch (error) {
        this.logger.error('error during todo sync cron job', error);
      }
    });
  }
}
