import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneTodoArgs,
  DeleteOneTodoArgs,
  FindManyTodoArgs,
  FindUniqueTodoArgs,
  Status,
  Todo,
  UpdateOneTodoArgs,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver()
export class TodoResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [Todo])
  async todos(@Args() args: FindManyTodoArgs) {
    return await this.prismaService.todo.findMany({
      ...args,
      include: {
        list: true,
      },
    });
  }

  @Query(() => Todo)
  async todo(@Args() args: FindUniqueTodoArgs) {
    return await this.prismaService.todo.findUniqueOrThrow({
      ...args,
      include: {
        list: true,
      },
    });
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
          set: Status.DONE,
        },
      },
    });

    return todo;
  }
}
