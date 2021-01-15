import { Field, InputType } from "@nestjs/graphql";
import { IsArray } from "class-validator";
import { Operator } from "../enums/filter-query.enum";
import { Filter } from "./filter.input";

@InputType()
export class FiltersExpression {
  @Field(() => Operator, { nullable: true })
  operator: Operator
  
  @Field(() => [Filter])
  @IsArray()
  filters: [Filter]

  @Field(() => [FiltersExpression], { nullable: true })
  @IsArray()
  childExpressions: [FiltersExpression]
}
