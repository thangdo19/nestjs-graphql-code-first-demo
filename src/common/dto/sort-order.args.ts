import { ArgsType, Field } from "@nestjs/graphql";
import { PaginateArgs } from "./paginate.args";

@ArgsType()
export class SortOrderArgs extends PaginateArgs {
  @Field()
  order: string
}
