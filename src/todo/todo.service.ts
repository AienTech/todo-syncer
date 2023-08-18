import { Injectable, Logger } from '@nestjs/common';

import { MsGraphService } from 'src/ms-graph/ms-graph.service';

@Injectable()
export class TodoService {
  constructor(private readonly msService: MsGraphService) {}

  getTodos() {
    try {
      return this.msService.client.api('/me/todo/lists');
    } catch (err) {
      Logger.error(err);
    }
  }
}
