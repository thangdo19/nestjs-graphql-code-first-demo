import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Author } from "src/authors/author.entity";

@ObjectType()
export class Post {
  @Field(() => Int)
  id: number

  @Field(() => Int)
  authorId: number

  @Field(() => Author)
  author: Author

  @Field()
  title: string

  @Field(() => Int, { nullable: true })
  vote?: number
}
