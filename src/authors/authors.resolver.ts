import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "src/posts/post.entity";
import { PostsService } from "src/posts/posts.service";
import { Author } from "./author.entity";
import { AuthorsService } from "./authors.service";

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(() => [Author], { name: 'authors' })
  getAuthors(): any[] {
    return this.authorsService.getAuthors()
  }

  @ResolveField(() => [Post], { name: 'posts' })
  getPosts(@Parent() author: Author) {
    return [] as Post[]
  }
}
