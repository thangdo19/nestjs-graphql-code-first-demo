import { EntityRepository, Repository } from "typeorm";
import { Author } from "./author.model";

@EntityRepository(Author)
export class AuthorsRepository extends Repository<Author> {}