import { Injectable } from '@nestjs/common';
import { Mutex } from 'async-mutex';

@Injectable()
export class MutexService {
  public readonly mutex: Mutex = new Mutex();
}
