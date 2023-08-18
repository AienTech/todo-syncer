import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneTodoArgs,
  DeleteOneTodoArgs,
  FindManyTodoArgs,
  FindUniqueTodoArgs,
  Todo,
  UpdateOneTodoArgs,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';
import { TodoService } from './todo.service';

@Resolver()
export class TodoResolver {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly todoService: TodoService,
  ) {}

  @Query(() => [Todo])
  async msTodos(@Args() args: FindManyTodoArgs) {
    try {
      const t = await this.todoService.getTodos().get();
      console.log(t);
    } catch (err) {
      console.error(err);
    }
    return [];
  }

  @Query(() => [Todo])
  async todos(@Args() args: FindManyTodoArgs) {
    return await this.prismaService.todo.findMany(args);
  }

  @Query(() => Todo)
  async todo(@Args() args: FindUniqueTodoArgs) {
    return await this.prismaService.todo.findUniqueOrThrow(args);
  }

  @Mutation(() => Todo)
  async createTodo(@Args() args: CreateOneTodoArgs) {
    return await this.prismaService.todo.create(args);
  }

  @Mutation(() => Todo)
  async updateTodo(@Args() args: UpdateOneTodoArgs) {
    return await this.prismaService.todo.update(args);
  }

  @Mutation(() => Todo)
  async deleteTodo(@Args() args: DeleteOneTodoArgs) {
    return await this.prismaService.todo.delete(args);
  }

  @Mutation(() => Todo)
  async markTodoAsDone(@Args('id') id: number) {
    const todo = await this.prismaService.todo.update({
      where: {
        id,
      },
      data: {
        status: {
          set: 'DONE',
        },
      },
    });

    return todo;
  }
}
