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

  @Cron('0/10 * * * * *')
  async sync() {
    if (this.mutexService.mutex.isLocked()) {
      this.logger.log('previous job still running. skipping this iteration');
      return;
    }

    await this.mutexService.mutex.runExclusive(async () => {
      try {
        this.logger.log('started list sync cron job');

        const localLists = await this.prismaService.list.findMany();

        const { data: lists } = await this.apiService.getAllLists();

        console.log({ lists, localLists });

        this.logger.log('finished list sync cron job');
      } catch (error) {
        this.logger.error('error during list sync cron job', error);
      }
    });
  }
}
