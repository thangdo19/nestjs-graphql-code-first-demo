import { Post } from "@app/posts/post.model";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreatePosts implements Seeder {
  // eslint-disable-next-line
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Post)().createMany(10000)
  }
}
