import { Args, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { Post } from "src/app/posts/post.model";
import { PostsService } from "src/app/posts/posts.service";
import { FiltersExpression } from "src/common/inputs/filters-expression.input";
import { Author } from "./author.model";
import { AuthorsService } from "./authors.service";

@Resolver(() => Author)
export class AuthorsResolver {
  constructor(
    private authorsService: AuthorsService,
    private postsService: PostsService,
  ) {}

  @Query(() => [Author], { name: 'authors' })
  getAuthors(
    @Args('filter') filters: FiltersExpression
  ): Promise<Author[]> {
    return this.authorsService.getAuthors(filters)
  }

  @ResolveField(() => [Post], { name: 'posts' })
  getPosts(@Parent() author: Author) {
    return this.postsService.getManyWithOptions({
      where: { authorId: author.id }
    })
  }
}
