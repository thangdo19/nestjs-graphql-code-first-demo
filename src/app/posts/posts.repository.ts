import { EntityRepository, Repository } from "typeorm";
import { Post } from "./post.model";

@EntityRepository(Post)
export class PostsRepository extends Repository<Post> {}