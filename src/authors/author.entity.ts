import { Field, Int, ObjectType } from '@nestjs/graphql';
// import { Post } from './post';

@ObjectType()
export class Author {
  @Field(() => Int)
  id: number;

  @Field({
    description: "Author's first name",
    nullable: true,
  })
  firstName?: string;

  @Field({
    description: "Author's last name",
    nullable: true,
  })
  lastName?: string;

  // @Field(type => [Post])
  // posts: Post[];
}
