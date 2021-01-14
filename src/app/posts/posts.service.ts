import { Injectable } from "@nestjs/common";
import { Post } from "./post.model";
import { PostsRepository } from "./posts.repository";

@Injectable()
export class PostsService {
  constructor(
    private postsRepository: PostsRepository,
  ) {}

  getPost(id: number): Promise<Post> {
    return this.postsRepository.findOne({ where: { id } })
  }

  getPosts(): Promise<Post[]> {
    return this.postsRepository.find()
  }
}
