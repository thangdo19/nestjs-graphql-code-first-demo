import { forwardRef, Module } from "@nestjs/common";
import { AuthorsModule } from "src/authors/authors.module";
import { PostsResolver } from "./posts.resolver";
import { PostsService } from "./posts.service";

@Module({
  imports: [
    forwardRef(() => AuthorsModule),
  ],
  providers: [
    PostsService,
    PostsResolver,
  ],
  exports: [
    PostsService,
  ],
})
export class PostsModule {}
