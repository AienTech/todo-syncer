import { Injectable, Logger } from '@nestjs/common';
import { Request } from 'express';

import { MsGraphService } from 'src/ms-graph/ms-graph.service';

@Injectable()
export class TodoService {
  constructor(private readonly msService: MsGraphService) { }

  getTodos(userId: string) {
    try {
      return this.msService.GraphClient(userId).api(`me/todo/lists`);
    } catch (err) {
      Logger.error(err);
    }
  }
}
