import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';
import { ApiService } from 'src/mock-third-party/api/api.service';
import { MutexService } from 'src/mutex/mutex.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ListService {
  private readonly logger = new Logger(ListService.name);

  constructor(
    private readonly mutexService: MutexService,
    private readonly prismaService: PrismaService,
    private readonly apiService: ApiService,
  ) {}

  @Cron('0/7 * * * * *')
  async sync() {
    if (this.mutexService.mutex.isLocked()) {
      this.logger.log('previous job still running. skipping this iteration');
      return;
    }

    await this.mutexService.mutex.runExclusive(async () => {
      try {
        this.logger.log('started list sync cron job');

        const localLists = await this.prismaService.list.findMany();

        const { data: remoteLists } = await this.apiService.getAllLists();

        // Check for lists that exist remotely but not in local and add them to the local
        for (const remoteList of remoteLists) {
          const localList = localLists.find(
            (l) => l.integrationId === remoteList.id,
          );

          if (!localList) {
            this.logger.log(`synchronising ${remoteList.id} with local db`);

            await this.prismaService.list.create({
              data: {
                integrationId: remoteList.id,
                title: remoteList.displayName,
              },
            });
          }
        }

        // Check for lists that exist locally but not in remote and add them to the remote
        for (const localList of localLists) {
          if (
            !remoteLists.some(
              (remoteList) => remoteList.id === localList.integrationId,
            )
          ) {
            this.logger.log(`synchronising ${localList.id} with remote db`);

            await this.apiService.createList({
              id: localList.integrationId,
              displayName: localList.title,
              wellknownListName: localList.title,
            });
          }
        }

        this.logger.log('finished list sync cron job');
      } catch (error) {
        this.logger.error('error during list sync cron job', error);
      }
    });
  }
}
