import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateOneTodoArgs, FindManyTodoArgs, FindUniqueTodoArgs, Todo } from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver()
export class TodoResolver {

	constructor(
		private readonly prismaService: PrismaService
	) { }

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
}
