import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Author } from "src/authors/author.entity";
import { AuthorsService } from "src/authors/authors.service";
import { Post } from "./post.entity";
import { PostsService } from "./posts.service";

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private postsService: PostsService,
    private authorsService: AuthorsService,
  ) {}

  @Query(() => [Post], { name: 'posts' })
  getPosts() {
    return this.postsService.getPosts()
  }

  @ResolveField(() => Author, { name: 'author'})
  getAuthor(@Parent() post: Post) {
    console.log('shit:', post)
    return []
  }
}
