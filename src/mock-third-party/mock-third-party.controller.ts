import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { MockThirdPartyService } from './mock-third-party.service';
import { List, Todo } from './mock-third-party.interface';

@Controller('mock-third-party')
export class MockThirdPartyController {
  constructor(private readonly mockService: MockThirdPartyService) {}

  @Get()
  findAllList(): List[] {
    return this.mockService.findAllList();
  }

  @Get(':id')
  findOneList(@Param('id') id: string): List {
    return this.mockService.findOneList(id);
  }

  @Post()
  createList(@Body() todoList: List): void {
    this.mockService.createList(todoList);
  }

  @Put(':id')
  updateList(@Param('id') id: string, @Body() todoList: List): void {
    this.mockService.updateList(id, todoList);
  }

  @Delete(':id')
  removeList(@Param('id') id: string): void {
    this.mockService.removeList(id);
  }

  @Get('/:lid/todos')
  findAllTodo(@Param('lid') lid: string): Todo[] {
    return this.mockService.findAllTodo(lid);
  }

  @Get('/:lid/todos/:id')
  findOneTodo(@Param('lid') lid: string, @Param('id') id: string): Todo {
    return this.mockService.findOneTodo(lid, id);
  }

  @Post('/:lid/todos')
  createTodo(@Param('lid') lid: string, @Body() todo: Todo): void {
    this.mockService.createTodo(lid, todo);
  }

  @Put('/:lid/todos/:id')
  updateTodo(
    @Param('lid') lid: string,
    @Param('id') id: string,
    @Body() todo: Todo,
  ): void {
    this.mockService.updateTodo(lid, id, todo);
  }

  @Delete('/:lid/todos/:id')
  removeTodo(@Param('lid') lid: string, @Param('id') id: string): void {
    this.mockService.removeTodo(lid, id);
  }
}
