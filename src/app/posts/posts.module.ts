import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthorsModule } from "src/app/authors/authors.module";
import { PostsRepository } from "./posts.repository";
import { PostsResolver } from "./posts.resolver";
import { PostsService } from "./posts.service";

@Module({
  imports: [
    TypeOrmModule.forFeature([PostsRepository]),
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
