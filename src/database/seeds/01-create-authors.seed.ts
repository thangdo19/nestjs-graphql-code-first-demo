import { Author } from "@app/authors/author.model";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateAuthors implements Seeder {
  // eslint-disable-next-line
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Author)().createMany(1000)
  }
}
