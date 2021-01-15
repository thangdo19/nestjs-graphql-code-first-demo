import { Field, InputType } from "@nestjs/graphql";
import { IsArray, IsString } from "class-validator";
import { Operation } from "../enums/filter-query.enum";

@InputType()
export class Filter {
  @Field(() => Operation)
  op: Operation
  
  @Field(() => [String])
  @IsArray()
  values: string[]

  @Field()
  @IsString()
  field: string

  @Field({ nullable: true })
  @IsString()
  relationField: string
}
