import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostsModule } from "src/app/posts/posts.module";
import { AuthorsRepository } from "./authors.repository";
import { AuthorsResolver } from "./authors.resolver";
import { AuthorsService } from "./authors.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([AuthorsRepository]),
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
