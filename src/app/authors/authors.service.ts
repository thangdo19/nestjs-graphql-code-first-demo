import { Injectable } from "@nestjs/common";
import { FiltersExpression } from "src/common/inputs/filters-expression.input";
import { Author } from "./author.model";
import { AuthorsRepository } from "./authors.repository";

@Injectable()
export class AuthorsService {
  constructor(
    public authorsRepository: AuthorsRepository,
  ) {}
  
  getAuthor(id: number): Promise<Author> {
    return this.authorsRepository.findOne({ where: { id } })
  }

  getAuthors(filters: FiltersExpression): Promise<Author[]> {
    return this.authorsRepository.getMany(filters)
  }
}
