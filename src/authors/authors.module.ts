import { forwardRef, Module } from "@nestjs/common";
import { PostsModule } from "src/posts/posts.module";
import { AuthorsResolver } from "./authors.resolver";
import { AuthorsService } from "./authors.service";

@Module({
  imports: [
    forwardRef(() => PostsModule),
  ],
  providers: [
    AuthorsService,
    AuthorsResolver,
  ],
  exports: [
    AuthorsService,
  ],
})
export class AuthorsModule {}
