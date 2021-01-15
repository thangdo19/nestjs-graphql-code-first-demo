import { Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Author } from "src/app/authors/author.model";
import { AuthorsService } from "src/app/authors/authors.service";
import { Post } from "./post.model";
import { PostsService } from "./posts.service";

@Resolver(() => Post)
export class PostsResolver {
  constructor(
    private postsService: PostsService,
    private authorsService: AuthorsService,
  ) {}

  @Query(() => [Post], { name: 'posts' })
  getPosts() {
    return this.postsService.getMany()
  }

  @ResolveField(() => Author, { name: 'author' })
  getAuthor(@Parent() post: Post) {
    return this.authorsService.getAuthor(post.id)
  }
}
