import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import {
  CreateOneListArgs,
  DeleteOneListArgs,
  FindManyListArgs,
  FindUniqueListArgs,
  List,
  UpdateOneListArgs,
} from 'src/@generated';
import { PrismaService } from 'src/prisma/prisma.service';

@Resolver()
export class ListResolver {
  constructor(private readonly prismaService: PrismaService) {}

  @Query(() => [List])
  async lists(@Args() args: FindManyListArgs) {
    return await this.prismaService.list.findMany({
      ...args,
      include: {
        todos: true,
      },
    });
  }

  @Query(() => List)
  async list(@Args() args: FindUniqueListArgs) {
    return await this.prismaService.list.findUniqueOrThrow({
      ...args,
      include: {
        todos: true,
      },
    });
  }

  @Mutation(() => List)
  async createList(@Args() args: CreateOneListArgs) {
    return await this.prismaService.list.create(args);
  }

  @Mutation(() => List)
  async updateList(@Args() args: UpdateOneListArgs) {
    return await this.prismaService.list.update(args);
  }

  @Mutation(() => List)
  async deleteList(@Args() args: DeleteOneListArgs) {
    return await this.prismaService.list.delete(args);
  }
}
