import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { Int } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { registerEnumType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

export enum TodoScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    status = "status",
    listId = "listId",
    integrationId = "integrationId"
}

export enum TransactionIsolationLevel {
    ReadUncommitted = "ReadUncommitted",
    ReadCommitted = "ReadCommitted",
    RepeatableRead = "RepeatableRead",
    Serializable = "Serializable"
}

export enum SortOrder {
    asc = "asc",
    desc = "desc"
}

export enum QueryMode {
    'default' = "default",
    insensitive = "insensitive"
}

export enum NullsOrder {
    first = "first",
    last = "last"
}

export enum ListScalarFieldEnum {
    id = "id",
    title = "title"
}

registerEnumType(ListScalarFieldEnum, { name: 'ListScalarFieldEnum', description: undefined })
registerEnumType(NullsOrder, { name: 'NullsOrder', description: undefined })
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined })
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined })
registerEnumType(TransactionIsolationLevel, { name: 'TransactionIsolationLevel', description: undefined })
registerEnumType(TodoScalarFieldEnum, { name: 'TodoScalarFieldEnum', description: undefined })

@ObjectType()
export class AggregateList {
    @Field(() => ListCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ListCountAggregate>;
    @Field(() => ListAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ListAvgAggregate>;
    @Field(() => ListSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ListSumAggregate>;
    @Field(() => ListMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ListMinAggregate>;
    @Field(() => ListMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ListMaxAggregate>;
}

@ArgsType()
export class CreateManyListArgs {
    @Field(() => [ListCreateManyInput], {nullable:false})
    @Type(() => ListCreateManyInput)
    data!: Array<ListCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneListArgs {
    @Field(() => ListCreateInput, {nullable:false})
    @Type(() => ListCreateInput)
    data!: InstanceType<typeof ListCreateInput>;
}

@ArgsType()
export class DeleteManyListArgs {
    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: InstanceType<typeof ListWhereInput>;
}

@ArgsType()
export class DeleteOneListArgs {
    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstListOrThrowArgs {
    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: InstanceType<typeof ListWhereInput>;
    @Field(() => [ListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListOrderByWithRelationInput>;
    @Field(() => ListWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ListScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ListScalarFieldEnum>;
}

@ArgsType()
export class FindFirstListArgs {
    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: InstanceType<typeof ListWhereInput>;
    @Field(() => [ListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListOrderByWithRelationInput>;
    @Field(() => ListWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ListScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ListScalarFieldEnum>;
}

@ArgsType()
export class FindManyListArgs {
    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: InstanceType<typeof ListWhereInput>;
    @Field(() => [ListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListOrderByWithRelationInput>;
    @Field(() => ListWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [ListScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof ListScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueListOrThrowArgs {
    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueListArgs {
    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
}

@ArgsType()
export class ListAggregateArgs {
    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: InstanceType<typeof ListWhereInput>;
    @Field(() => [ListOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<ListOrderByWithRelationInput>;
    @Field(() => ListWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ListCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ListCountAggregateInput>;
    @Field(() => ListAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ListAvgAggregateInput>;
    @Field(() => ListSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ListSumAggregateInput>;
    @Field(() => ListMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ListMinAggregateInput>;
    @Field(() => ListMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ListMaxAggregateInput>;
}

@InputType()
export class ListAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class ListAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
}

@InputType()
export class ListAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class ListCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class ListCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class ListCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
}

@ObjectType()
export class ListCount {
    @Field(() => Int, {nullable:false})
    todos?: number;
}

@InputType()
export class ListCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
}

@InputType()
export class ListCreateNestedOneWithoutTodosInput {
    @Field(() => ListCreateWithoutTodosInput, {nullable:true})
    @Type(() => ListCreateWithoutTodosInput)
    create?: InstanceType<typeof ListCreateWithoutTodosInput>;
    @Field(() => ListCreateOrConnectWithoutTodosInput, {nullable:true})
    @Type(() => ListCreateOrConnectWithoutTodosInput)
    connectOrCreate?: InstanceType<typeof ListCreateOrConnectWithoutTodosInput>;
    @Field(() => ListWhereUniqueInput, {nullable:true})
    @Type(() => ListWhereUniqueInput)
    connect?: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
}

@InputType()
export class ListCreateOrConnectWithoutTodosInput {
    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
    @Field(() => ListCreateWithoutTodosInput, {nullable:false})
    @Type(() => ListCreateWithoutTodosInput)
    create!: InstanceType<typeof ListCreateWithoutTodosInput>;
}

@InputType()
export class ListCreateWithoutTodosInput {
    @Field(() => String, {nullable:false})
    title!: string;
}

@InputType()
export class ListCreateInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => TodoCreateNestedManyWithoutListInput, {nullable:true})
    todos?: InstanceType<typeof TodoCreateNestedManyWithoutListInput>;
}

@ArgsType()
export class ListGroupByArgs {
    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: InstanceType<typeof ListWhereInput>;
    @Field(() => [ListOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<ListOrderByWithAggregationInput>;
    @Field(() => [ListScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof ListScalarFieldEnum>;
    @Field(() => ListScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof ListScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => ListCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ListCountAggregateInput>;
    @Field(() => ListAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ListAvgAggregateInput>;
    @Field(() => ListSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ListSumAggregateInput>;
    @Field(() => ListMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ListMinAggregateInput>;
    @Field(() => ListMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ListMaxAggregateInput>;
}

@ObjectType()
export class ListGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => ListCountAggregate, {nullable:true})
    _count?: InstanceType<typeof ListCountAggregate>;
    @Field(() => ListAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof ListAvgAggregate>;
    @Field(() => ListSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof ListSumAggregate>;
    @Field(() => ListMinAggregate, {nullable:true})
    _min?: InstanceType<typeof ListMinAggregate>;
    @Field(() => ListMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof ListMaxAggregate>;
}

@InputType()
export class ListMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
}

@ObjectType()
export class ListMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
}

@InputType()
export class ListMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
}

@InputType()
export class ListMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
}

@ObjectType()
export class ListMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
}

@InputType()
export class ListMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
}

@InputType()
export class ListOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => ListCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof ListCountOrderByAggregateInput>;
    @Field(() => ListAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof ListAvgOrderByAggregateInput>;
    @Field(() => ListMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof ListMaxOrderByAggregateInput>;
    @Field(() => ListMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof ListMinOrderByAggregateInput>;
    @Field(() => ListSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof ListSumOrderByAggregateInput>;
}

@InputType()
export class ListOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => TodoOrderByRelationAggregateInput, {nullable:true})
    todos?: InstanceType<typeof TodoOrderByRelationAggregateInput>;
}

@InputType()
export class ListRelationFilter {
    @Field(() => ListWhereInput, {nullable:true})
    is?: InstanceType<typeof ListWhereInput>;
    @Field(() => ListWhereInput, {nullable:true})
    isNot?: InstanceType<typeof ListWhereInput>;
}

@InputType()
export class ListScalarWhereWithAggregatesInput {
    @Field(() => [ListScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ListScalarWhereWithAggregatesInput>;
    @Field(() => [ListScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ListScalarWhereWithAggregatesInput>;
    @Field(() => [ListScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ListScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
}

@InputType()
export class ListSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
}

@ObjectType()
export class ListSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
}

@InputType()
export class ListSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
}

@InputType()
export class ListUncheckedCreateWithoutTodosInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
}

@InputType()
export class ListUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => TodoUncheckedCreateNestedManyWithoutListInput, {nullable:true})
    todos?: InstanceType<typeof TodoUncheckedCreateNestedManyWithoutListInput>;
}

@InputType()
export class ListUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ListUncheckedUpdateWithoutTodosInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ListUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => TodoUncheckedUpdateManyWithoutListNestedInput, {nullable:true})
    todos?: InstanceType<typeof TodoUncheckedUpdateManyWithoutListNestedInput>;
}

@InputType()
export class ListUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ListUpdateOneRequiredWithoutTodosNestedInput {
    @Field(() => ListCreateWithoutTodosInput, {nullable:true})
    @Type(() => ListCreateWithoutTodosInput)
    create?: InstanceType<typeof ListCreateWithoutTodosInput>;
    @Field(() => ListCreateOrConnectWithoutTodosInput, {nullable:true})
    @Type(() => ListCreateOrConnectWithoutTodosInput)
    connectOrCreate?: InstanceType<typeof ListCreateOrConnectWithoutTodosInput>;
    @Field(() => ListUpsertWithoutTodosInput, {nullable:true})
    @Type(() => ListUpsertWithoutTodosInput)
    upsert?: InstanceType<typeof ListUpsertWithoutTodosInput>;
    @Field(() => ListWhereUniqueInput, {nullable:true})
    @Type(() => ListWhereUniqueInput)
    connect?: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
    @Field(() => ListUpdateToOneWithWhereWithoutTodosInput, {nullable:true})
    @Type(() => ListUpdateToOneWithWhereWithoutTodosInput)
    update?: InstanceType<typeof ListUpdateToOneWithWhereWithoutTodosInput>;
}

@InputType()
export class ListUpdateToOneWithWhereWithoutTodosInput {
    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: InstanceType<typeof ListWhereInput>;
    @Field(() => ListUpdateWithoutTodosInput, {nullable:false})
    @Type(() => ListUpdateWithoutTodosInput)
    data!: InstanceType<typeof ListUpdateWithoutTodosInput>;
}

@InputType()
export class ListUpdateWithoutTodosInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
}

@InputType()
export class ListUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => TodoUpdateManyWithoutListNestedInput, {nullable:true})
    todos?: InstanceType<typeof TodoUpdateManyWithoutListNestedInput>;
}

@InputType()
export class ListUpsertWithoutTodosInput {
    @Field(() => ListUpdateWithoutTodosInput, {nullable:false})
    @Type(() => ListUpdateWithoutTodosInput)
    update!: InstanceType<typeof ListUpdateWithoutTodosInput>;
    @Field(() => ListCreateWithoutTodosInput, {nullable:false})
    @Type(() => ListCreateWithoutTodosInput)
    create!: InstanceType<typeof ListCreateWithoutTodosInput>;
    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: InstanceType<typeof ListWhereInput>;
}

@InputType()
export class ListWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [ListWhereInput], {nullable:true})
    AND?: Array<ListWhereInput>;
    @Field(() => [ListWhereInput], {nullable:true})
    OR?: Array<ListWhereInput>;
    @Field(() => [ListWhereInput], {nullable:true})
    NOT?: Array<ListWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => TodoListRelationFilter, {nullable:true})
    todos?: InstanceType<typeof TodoListRelationFilter>;
}

@InputType()
export class ListWhereInput {
    @Field(() => [ListWhereInput], {nullable:true})
    AND?: Array<ListWhereInput>;
    @Field(() => [ListWhereInput], {nullable:true})
    OR?: Array<ListWhereInput>;
    @Field(() => [ListWhereInput], {nullable:true})
    NOT?: Array<ListWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => TodoListRelationFilter, {nullable:true})
    todos?: InstanceType<typeof TodoListRelationFilter>;
}

@ObjectType()
export class List {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => [Todo], {nullable:true})
    todos?: Array<Todo>;
    @Field(() => ListCount, {nullable:false})
    _count?: InstanceType<typeof ListCount>;
}

@ArgsType()
export class UpdateManyListArgs {
    @Field(() => ListUpdateManyMutationInput, {nullable:false})
    @Type(() => ListUpdateManyMutationInput)
    data!: InstanceType<typeof ListUpdateManyMutationInput>;
    @Field(() => ListWhereInput, {nullable:true})
    @Type(() => ListWhereInput)
    where?: InstanceType<typeof ListWhereInput>;
}

@ArgsType()
export class UpdateOneListArgs {
    @Field(() => ListUpdateInput, {nullable:false})
    @Type(() => ListUpdateInput)
    data!: InstanceType<typeof ListUpdateInput>;
    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneListArgs {
    @Field(() => ListWhereUniqueInput, {nullable:false})
    @Type(() => ListWhereUniqueInput)
    where!: Prisma.AtLeast<ListWhereUniqueInput, 'id'>;
    @Field(() => ListCreateInput, {nullable:false})
    @Type(() => ListCreateInput)
    create!: InstanceType<typeof ListCreateInput>;
    @Field(() => ListUpdateInput, {nullable:false})
    @Type(() => ListUpdateInput)
    update!: InstanceType<typeof ListUpdateInput>;
}

@ObjectType()
export class AffectedRows {
    @Field(() => Int, {nullable:false})
    count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
    @Field(() => Boolean, {nullable:true})
    set?: boolean;
}

@InputType()
export class BoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
    @Field(() => Int, {nullable:true})
    set?: number;
    @Field(() => Int, {nullable:true})
    increment?: number;
    @Field(() => Int, {nullable:true})
    decrement?: number;
    @Field(() => Int, {nullable:true})
    multiply?: number;
    @Field(() => Int, {nullable:true})
    divide?: number;
}

@InputType()
export class IntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class IntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedBoolFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
    @Field(() => Boolean, {nullable:true})
    equals?: boolean;
    @Field(() => NestedBoolWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _min?: InstanceType<typeof NestedBoolFilter>;
    @Field(() => NestedBoolFilter, {nullable:true})
    _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedFloatFilter {
    @Field(() => Float, {nullable:true})
    equals?: number;
    @Field(() => [Float], {nullable:true})
    in?: Array<number>;
    @Field(() => [Float], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Float, {nullable:true})
    lt?: number;
    @Field(() => Float, {nullable:true})
    lte?: number;
    @Field(() => Float, {nullable:true})
    gt?: number;
    @Field(() => Float, {nullable:true})
    gte?: number;
    @Field(() => NestedFloatFilter, {nullable:true})
    not?: InstanceType<typeof NestedFloatFilter>;
}

@InputType()
export class NestedIntFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedIntWithAggregatesFilter {
    @Field(() => Int, {nullable:true})
    equals?: number;
    @Field(() => [Int], {nullable:true})
    in?: Array<number>;
    @Field(() => [Int], {nullable:true})
    notIn?: Array<number>;
    @Field(() => Int, {nullable:true})
    lt?: number;
    @Field(() => Int, {nullable:true})
    lte?: number;
    @Field(() => Int, {nullable:true})
    gt?: number;
    @Field(() => Int, {nullable:true})
    gte?: number;
    @Field(() => NestedIntWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedFloatFilter, {nullable:true})
    _avg?: InstanceType<typeof NestedFloatFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _sum?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _min?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _max?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedStringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class SortOrderInput {
    @Field(() => SortOrder, {nullable:false})
    sort!: keyof typeof SortOrder;
    @Field(() => NullsOrder, {nullable:true})
    nulls?: keyof typeof NullsOrder;
}

@InputType()
export class StringFieldUpdateOperationsInput {
    @Field(() => String, {nullable:true})
    set?: string;
}

@InputType()
export class StringFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringNullableWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
    @Field(() => NestedIntNullableFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringNullableFilter>;
    @Field(() => NestedStringNullableFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
    @Field(() => String, {nullable:true})
    equals?: string;
    @Field(() => [String], {nullable:true})
    in?: Array<string>;
    @Field(() => [String], {nullable:true})
    notIn?: Array<string>;
    @Field(() => String, {nullable:true})
    lt?: string;
    @Field(() => String, {nullable:true})
    lte?: string;
    @Field(() => String, {nullable:true})
    gt?: string;
    @Field(() => String, {nullable:true})
    gte?: string;
    @Field(() => String, {nullable:true})
    contains?: string;
    @Field(() => String, {nullable:true})
    startsWith?: string;
    @Field(() => String, {nullable:true})
    endsWith?: string;
    @Field(() => QueryMode, {nullable:true})
    mode?: keyof typeof QueryMode;
    @Field(() => NestedStringWithAggregatesFilter, {nullable:true})
    not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
    @Field(() => NestedIntFilter, {nullable:true})
    _count?: InstanceType<typeof NestedIntFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _min?: InstanceType<typeof NestedStringFilter>;
    @Field(() => NestedStringFilter, {nullable:true})
    _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateTodo {
    @Field(() => TodoCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TodoCountAggregate>;
    @Field(() => TodoAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TodoAvgAggregate>;
    @Field(() => TodoSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TodoSumAggregate>;
    @Field(() => TodoMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TodoMinAggregate>;
    @Field(() => TodoMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TodoMaxAggregate>;
}

@ArgsType()
export class CreateManyTodoArgs {
    @Field(() => [TodoCreateManyInput], {nullable:false})
    @Type(() => TodoCreateManyInput)
    data!: Array<TodoCreateManyInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneTodoArgs {
    @Field(() => TodoCreateInput, {nullable:false})
    @Type(() => TodoCreateInput)
    data!: InstanceType<typeof TodoCreateInput>;
}

@ArgsType()
export class DeleteManyTodoArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: InstanceType<typeof TodoWhereInput>;
}

@ArgsType()
export class DeleteOneTodoArgs {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindFirstTodoOrThrowArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithRelationInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodoScalarFieldEnum>;
}

@ArgsType()
export class FindFirstTodoArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithRelationInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodoScalarFieldEnum>;
}

@ArgsType()
export class FindManyTodoArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithRelationInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => [TodoScalarFieldEnum], {nullable:true})
    distinct?: Array<keyof typeof TodoScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueTodoOrThrowArgs {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
}

@ArgsType()
export class FindUniqueTodoArgs {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
}

@ArgsType()
export class TodoAggregateArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithRelationInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TodoCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TodoCountAggregateInput>;
    @Field(() => TodoAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TodoAvgAggregateInput>;
    @Field(() => TodoSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TodoSumAggregateInput>;
    @Field(() => TodoMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TodoMinAggregateInput>;
    @Field(() => TodoMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TodoMaxAggregateInput>;
}

@InputType()
export class TodoAvgAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    listId?: true;
}

@ObjectType()
export class TodoAvgAggregate {
    @Field(() => Float, {nullable:true})
    id?: number;
    @Field(() => Float, {nullable:true})
    listId?: number;
}

@InputType()
export class TodoAvgOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    listId?: keyof typeof SortOrder;
}

@InputType()
export class TodoCountAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    listId?: true;
    @Field(() => Boolean, {nullable:true})
    integrationId?: true;
    @Field(() => Boolean, {nullable:true})
    _all?: true;
}

@ObjectType()
export class TodoCountAggregate {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => Int, {nullable:false})
    title!: number;
    @Field(() => Int, {nullable:false})
    description!: number;
    @Field(() => Int, {nullable:false})
    status!: number;
    @Field(() => Int, {nullable:false})
    listId!: number;
    @Field(() => Int, {nullable:false})
    integrationId!: number;
    @Field(() => Int, {nullable:false})
    _all!: number;
}

@InputType()
export class TodoCountOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    listId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    integrationId?: keyof typeof SortOrder;
}

@InputType()
export class TodoCreateManyListInputEnvelope {
    @Field(() => [TodoCreateManyListInput], {nullable:false})
    @Type(() => TodoCreateManyListInput)
    data!: Array<TodoCreateManyListInput>;
    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}

@InputType()
export class TodoCreateManyListInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    status?: boolean;
    @Field(() => String, {nullable:true})
    integrationId?: string;
}

@InputType()
export class TodoCreateManyInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    status?: boolean;
    @Field(() => Int, {nullable:false})
    listId!: number;
    @Field(() => String, {nullable:true})
    integrationId?: string;
}

@InputType()
export class TodoCreateNestedManyWithoutListInput {
    @Field(() => [TodoCreateWithoutListInput], {nullable:true})
    @Type(() => TodoCreateWithoutListInput)
    create?: Array<TodoCreateWithoutListInput>;
    @Field(() => [TodoCreateOrConnectWithoutListInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutListInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutListInput>;
    @Field(() => TodoCreateManyListInputEnvelope, {nullable:true})
    @Type(() => TodoCreateManyListInputEnvelope)
    createMany?: InstanceType<typeof TodoCreateManyListInputEnvelope>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
}

@InputType()
export class TodoCreateOrConnectWithoutListInput {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
    @Field(() => TodoCreateWithoutListInput, {nullable:false})
    @Type(() => TodoCreateWithoutListInput)
    create!: InstanceType<typeof TodoCreateWithoutListInput>;
}

@InputType()
export class TodoCreateWithoutListInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    status?: boolean;
    @Field(() => String, {nullable:true})
    integrationId?: string;
}

@InputType()
export class TodoCreateInput {
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    status?: boolean;
    @Field(() => String, {nullable:true})
    integrationId?: string;
    @Field(() => ListCreateNestedOneWithoutTodosInput, {nullable:false})
    list!: InstanceType<typeof ListCreateNestedOneWithoutTodosInput>;
}

@ArgsType()
export class TodoGroupByArgs {
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: InstanceType<typeof TodoWhereInput>;
    @Field(() => [TodoOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<TodoOrderByWithAggregationInput>;
    @Field(() => [TodoScalarFieldEnum], {nullable:false})
    by!: Array<keyof typeof TodoScalarFieldEnum>;
    @Field(() => TodoScalarWhereWithAggregatesInput, {nullable:true})
    having?: InstanceType<typeof TodoScalarWhereWithAggregatesInput>;
    @Field(() => Int, {nullable:true})
    take?: number;
    @Field(() => Int, {nullable:true})
    skip?: number;
    @Field(() => TodoCountAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TodoCountAggregateInput>;
    @Field(() => TodoAvgAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TodoAvgAggregateInput>;
    @Field(() => TodoSumAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TodoSumAggregateInput>;
    @Field(() => TodoMinAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TodoMinAggregateInput>;
    @Field(() => TodoMaxAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TodoMaxAggregateInput>;
}

@ObjectType()
export class TodoGroupBy {
    @Field(() => Int, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:false})
    status!: boolean;
    @Field(() => Int, {nullable:false})
    listId!: number;
    @Field(() => String, {nullable:true})
    integrationId?: string;
    @Field(() => TodoCountAggregate, {nullable:true})
    _count?: InstanceType<typeof TodoCountAggregate>;
    @Field(() => TodoAvgAggregate, {nullable:true})
    _avg?: InstanceType<typeof TodoAvgAggregate>;
    @Field(() => TodoSumAggregate, {nullable:true})
    _sum?: InstanceType<typeof TodoSumAggregate>;
    @Field(() => TodoMinAggregate, {nullable:true})
    _min?: InstanceType<typeof TodoMinAggregate>;
    @Field(() => TodoMaxAggregate, {nullable:true})
    _max?: InstanceType<typeof TodoMaxAggregate>;
}

@InputType()
export class TodoListRelationFilter {
    @Field(() => TodoWhereInput, {nullable:true})
    every?: InstanceType<typeof TodoWhereInput>;
    @Field(() => TodoWhereInput, {nullable:true})
    some?: InstanceType<typeof TodoWhereInput>;
    @Field(() => TodoWhereInput, {nullable:true})
    none?: InstanceType<typeof TodoWhereInput>;
}

@InputType()
export class TodoMaxAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    listId?: true;
    @Field(() => Boolean, {nullable:true})
    integrationId?: true;
}

@ObjectType()
export class TodoMaxAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    status?: boolean;
    @Field(() => Int, {nullable:true})
    listId?: number;
    @Field(() => String, {nullable:true})
    integrationId?: string;
}

@InputType()
export class TodoMaxOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    listId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    integrationId?: keyof typeof SortOrder;
}

@InputType()
export class TodoMinAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    title?: true;
    @Field(() => Boolean, {nullable:true})
    description?: true;
    @Field(() => Boolean, {nullable:true})
    status?: true;
    @Field(() => Boolean, {nullable:true})
    listId?: true;
    @Field(() => Boolean, {nullable:true})
    integrationId?: true;
}

@ObjectType()
export class TodoMinAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:true})
    title?: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    status?: boolean;
    @Field(() => Int, {nullable:true})
    listId?: number;
    @Field(() => String, {nullable:true})
    integrationId?: string;
}

@InputType()
export class TodoMinOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    listId?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    integrationId?: keyof typeof SortOrder;
}

@InputType()
export class TodoOrderByRelationAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    _count?: keyof typeof SortOrder;
}

@InputType()
export class TodoOrderByWithAggregationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    listId?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    integrationId?: InstanceType<typeof SortOrderInput>;
    @Field(() => TodoCountOrderByAggregateInput, {nullable:true})
    _count?: InstanceType<typeof TodoCountOrderByAggregateInput>;
    @Field(() => TodoAvgOrderByAggregateInput, {nullable:true})
    _avg?: InstanceType<typeof TodoAvgOrderByAggregateInput>;
    @Field(() => TodoMaxOrderByAggregateInput, {nullable:true})
    _max?: InstanceType<typeof TodoMaxOrderByAggregateInput>;
    @Field(() => TodoMinOrderByAggregateInput, {nullable:true})
    _min?: InstanceType<typeof TodoMinOrderByAggregateInput>;
    @Field(() => TodoSumOrderByAggregateInput, {nullable:true})
    _sum?: InstanceType<typeof TodoSumOrderByAggregateInput>;
}

@InputType()
export class TodoOrderByWithRelationInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    title?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    description?: InstanceType<typeof SortOrderInput>;
    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    listId?: keyof typeof SortOrder;
    @Field(() => SortOrderInput, {nullable:true})
    integrationId?: InstanceType<typeof SortOrderInput>;
    @Field(() => ListOrderByWithRelationInput, {nullable:true})
    list?: InstanceType<typeof ListOrderByWithRelationInput>;
}

@InputType()
export class TodoScalarWhereWithAggregatesInput {
    @Field(() => [TodoScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<TodoScalarWhereWithAggregatesInput>;
    @Field(() => [TodoScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<TodoScalarWhereWithAggregatesInput>;
    @Field(() => [TodoScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<TodoScalarWhereWithAggregatesInput>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: InstanceType<typeof StringWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableWithAggregatesFilter>;
    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    status?: InstanceType<typeof BoolWithAggregatesFilter>;
    @Field(() => IntWithAggregatesFilter, {nullable:true})
    listId?: InstanceType<typeof IntWithAggregatesFilter>;
    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    integrationId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
}

@InputType()
export class TodoScalarWhereInput {
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    AND?: Array<TodoScalarWhereInput>;
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    OR?: Array<TodoScalarWhereInput>;
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    NOT?: Array<TodoScalarWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    status?: InstanceType<typeof BoolFilter>;
    @Field(() => IntFilter, {nullable:true})
    listId?: InstanceType<typeof IntFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    integrationId?: InstanceType<typeof StringNullableFilter>;
}

@InputType()
export class TodoSumAggregateInput {
    @Field(() => Boolean, {nullable:true})
    id?: true;
    @Field(() => Boolean, {nullable:true})
    listId?: true;
}

@ObjectType()
export class TodoSumAggregate {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => Int, {nullable:true})
    listId?: number;
}

@InputType()
export class TodoSumOrderByAggregateInput {
    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;
    @Field(() => SortOrder, {nullable:true})
    listId?: keyof typeof SortOrder;
}

@InputType()
export class TodoUncheckedCreateNestedManyWithoutListInput {
    @Field(() => [TodoCreateWithoutListInput], {nullable:true})
    @Type(() => TodoCreateWithoutListInput)
    create?: Array<TodoCreateWithoutListInput>;
    @Field(() => [TodoCreateOrConnectWithoutListInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutListInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutListInput>;
    @Field(() => TodoCreateManyListInputEnvelope, {nullable:true})
    @Type(() => TodoCreateManyListInputEnvelope)
    createMany?: InstanceType<typeof TodoCreateManyListInputEnvelope>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
}

@InputType()
export class TodoUncheckedCreateWithoutListInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    status?: boolean;
    @Field(() => String, {nullable:true})
    integrationId?: string;
}

@InputType()
export class TodoUncheckedCreateInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description?: string;
    @Field(() => Boolean, {nullable:true})
    status?: boolean;
    @Field(() => Int, {nullable:false})
    listId!: number;
    @Field(() => String, {nullable:true})
    integrationId?: string;
}

@InputType()
export class TodoUncheckedUpdateManyWithoutListNestedInput {
    @Field(() => [TodoCreateWithoutListInput], {nullable:true})
    @Type(() => TodoCreateWithoutListInput)
    create?: Array<TodoCreateWithoutListInput>;
    @Field(() => [TodoCreateOrConnectWithoutListInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutListInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutListInput>;
    @Field(() => [TodoUpsertWithWhereUniqueWithoutListInput], {nullable:true})
    @Type(() => TodoUpsertWithWhereUniqueWithoutListInput)
    upsert?: Array<TodoUpsertWithWhereUniqueWithoutListInput>;
    @Field(() => TodoCreateManyListInputEnvelope, {nullable:true})
    @Type(() => TodoCreateManyListInputEnvelope)
    createMany?: InstanceType<typeof TodoCreateManyListInputEnvelope>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
    @Field(() => [TodoUpdateWithWhereUniqueWithoutListInput], {nullable:true})
    @Type(() => TodoUpdateWithWhereUniqueWithoutListInput)
    update?: Array<TodoUpdateWithWhereUniqueWithoutListInput>;
    @Field(() => [TodoUpdateManyWithWhereWithoutListInput], {nullable:true})
    @Type(() => TodoUpdateManyWithWhereWithoutListInput)
    updateMany?: Array<TodoUpdateManyWithWhereWithoutListInput>;
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    @Type(() => TodoScalarWhereInput)
    deleteMany?: Array<TodoScalarWhereInput>;
}

@InputType()
export class TodoUncheckedUpdateManyWithoutListInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    integrationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TodoUncheckedUpdateManyInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    listId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    integrationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TodoUncheckedUpdateWithoutListInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    integrationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TodoUncheckedUpdateInput {
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    listId?: InstanceType<typeof IntFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    integrationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TodoUpdateManyMutationInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    integrationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TodoUpdateManyWithWhereWithoutListInput {
    @Field(() => TodoScalarWhereInput, {nullable:false})
    @Type(() => TodoScalarWhereInput)
    where!: InstanceType<typeof TodoScalarWhereInput>;
    @Field(() => TodoUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoUpdateManyMutationInput)
    data!: InstanceType<typeof TodoUpdateManyMutationInput>;
}

@InputType()
export class TodoUpdateManyWithoutListNestedInput {
    @Field(() => [TodoCreateWithoutListInput], {nullable:true})
    @Type(() => TodoCreateWithoutListInput)
    create?: Array<TodoCreateWithoutListInput>;
    @Field(() => [TodoCreateOrConnectWithoutListInput], {nullable:true})
    @Type(() => TodoCreateOrConnectWithoutListInput)
    connectOrCreate?: Array<TodoCreateOrConnectWithoutListInput>;
    @Field(() => [TodoUpsertWithWhereUniqueWithoutListInput], {nullable:true})
    @Type(() => TodoUpsertWithWhereUniqueWithoutListInput)
    upsert?: Array<TodoUpsertWithWhereUniqueWithoutListInput>;
    @Field(() => TodoCreateManyListInputEnvelope, {nullable:true})
    @Type(() => TodoCreateManyListInputEnvelope)
    createMany?: InstanceType<typeof TodoCreateManyListInputEnvelope>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    set?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
    @Field(() => [TodoWhereUniqueInput], {nullable:true})
    @Type(() => TodoWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<TodoWhereUniqueInput, 'id'>>;
    @Field(() => [TodoUpdateWithWhereUniqueWithoutListInput], {nullable:true})
    @Type(() => TodoUpdateWithWhereUniqueWithoutListInput)
    update?: Array<TodoUpdateWithWhereUniqueWithoutListInput>;
    @Field(() => [TodoUpdateManyWithWhereWithoutListInput], {nullable:true})
    @Type(() => TodoUpdateManyWithWhereWithoutListInput)
    updateMany?: Array<TodoUpdateManyWithWhereWithoutListInput>;
    @Field(() => [TodoScalarWhereInput], {nullable:true})
    @Type(() => TodoScalarWhereInput)
    deleteMany?: Array<TodoScalarWhereInput>;
}

@InputType()
export class TodoUpdateWithWhereUniqueWithoutListInput {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
    @Field(() => TodoUpdateWithoutListInput, {nullable:false})
    @Type(() => TodoUpdateWithoutListInput)
    data!: InstanceType<typeof TodoUpdateWithoutListInput>;
}

@InputType()
export class TodoUpdateWithoutListInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    integrationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
}

@InputType()
export class TodoUpdateInput {
    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: InstanceType<typeof StringFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    description?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    status?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    integrationId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
    @Field(() => ListUpdateOneRequiredWithoutTodosNestedInput, {nullable:true})
    list?: InstanceType<typeof ListUpdateOneRequiredWithoutTodosNestedInput>;
}

@InputType()
export class TodoUpsertWithWhereUniqueWithoutListInput {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
    @Field(() => TodoUpdateWithoutListInput, {nullable:false})
    @Type(() => TodoUpdateWithoutListInput)
    update!: InstanceType<typeof TodoUpdateWithoutListInput>;
    @Field(() => TodoCreateWithoutListInput, {nullable:false})
    @Type(() => TodoCreateWithoutListInput)
    create!: InstanceType<typeof TodoCreateWithoutListInput>;
}

@InputType()
export class TodoWhereUniqueInput {
    @Field(() => Int, {nullable:true})
    id?: number;
    @Field(() => [TodoWhereInput], {nullable:true})
    AND?: Array<TodoWhereInput>;
    @Field(() => [TodoWhereInput], {nullable:true})
    OR?: Array<TodoWhereInput>;
    @Field(() => [TodoWhereInput], {nullable:true})
    NOT?: Array<TodoWhereInput>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    status?: InstanceType<typeof BoolFilter>;
    @Field(() => IntFilter, {nullable:true})
    listId?: InstanceType<typeof IntFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    integrationId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ListRelationFilter, {nullable:true})
    list?: InstanceType<typeof ListRelationFilter>;
}

@InputType()
export class TodoWhereInput {
    @Field(() => [TodoWhereInput], {nullable:true})
    AND?: Array<TodoWhereInput>;
    @Field(() => [TodoWhereInput], {nullable:true})
    OR?: Array<TodoWhereInput>;
    @Field(() => [TodoWhereInput], {nullable:true})
    NOT?: Array<TodoWhereInput>;
    @Field(() => IntFilter, {nullable:true})
    id?: InstanceType<typeof IntFilter>;
    @Field(() => StringFilter, {nullable:true})
    title?: InstanceType<typeof StringFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    description?: InstanceType<typeof StringNullableFilter>;
    @Field(() => BoolFilter, {nullable:true})
    status?: InstanceType<typeof BoolFilter>;
    @Field(() => IntFilter, {nullable:true})
    listId?: InstanceType<typeof IntFilter>;
    @Field(() => StringNullableFilter, {nullable:true})
    integrationId?: InstanceType<typeof StringNullableFilter>;
    @Field(() => ListRelationFilter, {nullable:true})
    list?: InstanceType<typeof ListRelationFilter>;
}

@ObjectType()
export class Todo {
    @Field(() => ID, {nullable:false})
    id!: number;
    @Field(() => String, {nullable:false})
    title!: string;
    @Field(() => String, {nullable:true})
    description!: string | null;
    @Field(() => Boolean, {nullable:false,defaultValue:false})
    status!: boolean;
    @Field(() => Int, {nullable:false})
    listId!: number;
    @Field(() => String, {nullable:true})
    integrationId!: string | null;
    @Field(() => List, {nullable:false})
    list?: InstanceType<typeof List>;
}

@ArgsType()
export class UpdateManyTodoArgs {
    @Field(() => TodoUpdateManyMutationInput, {nullable:false})
    @Type(() => TodoUpdateManyMutationInput)
    data!: InstanceType<typeof TodoUpdateManyMutationInput>;
    @Field(() => TodoWhereInput, {nullable:true})
    @Type(() => TodoWhereInput)
    where?: InstanceType<typeof TodoWhereInput>;
}

@ArgsType()
export class UpdateOneTodoArgs {
    @Field(() => TodoUpdateInput, {nullable:false})
    @Type(() => TodoUpdateInput)
    data!: InstanceType<typeof TodoUpdateInput>;
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
}

@ArgsType()
export class UpsertOneTodoArgs {
    @Field(() => TodoWhereUniqueInput, {nullable:false})
    @Type(() => TodoWhereUniqueInput)
    where!: Prisma.AtLeast<TodoWhereUniqueInput, 'id'>;
    @Field(() => TodoCreateInput, {nullable:false})
    @Type(() => TodoCreateInput)
    create!: InstanceType<typeof TodoCreateInput>;
    @Field(() => TodoUpdateInput, {nullable:false})
    @Type(() => TodoUpdateInput)
    update!: InstanceType<typeof TodoUpdateInput>;
}
