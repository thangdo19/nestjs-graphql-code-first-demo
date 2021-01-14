import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "src/app/posts/post.model";
import { PostsService } from "src/app/posts/posts.service";
import { Author } from "./author.model";
import { AuthorsService } from "./authors.service";

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(() => [Author], { name: 'authors' })
  getAuthors(): Promise<Author[]> {
    return this.authorsService.getAuthors()
  }

  @ResolveField(() => [Post], { name: 'posts' })
  getPosts(@Parent() author: Author) {
    console.log(author)
    return [] as Post[]
  }
}
