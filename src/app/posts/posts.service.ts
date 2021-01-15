import { Injectable } from "@nestjs/common";
import { FindManyOptions, FindOneOptions } from "typeorm";
import { Post } from "./post.model";
import { PostsRepository } from "./posts.repository";

@Injectable()
export class PostsService {
  constructor(
    private postsRepository: PostsRepository,
  ) {}

  getOne(id: number): Promise<Post> {
    return this.postsRepository.findOne({ where: { id } })
  }

  getOneWithOptions(options: FindOneOptions) {
    return this.postsRepository.findOne(options)
  }

  getMany(): Promise<Post[]> {
    return this.postsRepository.find()
  }

  getManyWithOptions(options: FindManyOptions) {
    return this.postsRepository.find(options)
  }
}
