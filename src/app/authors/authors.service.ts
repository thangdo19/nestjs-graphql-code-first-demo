import { Injectable } from "@nestjs/common";
import { Author } from "./author.model";
import { AuthorsRepository } from "./authors.repository";

@Injectable()
export class AuthorsService {
  constructor(
    private authorsRepository: AuthorsRepository,
  ) {}
  
  getAuthor(id: number): Promise<Author> {
    return this.authorsRepository.findOne({ where: { id } })
  }

  getAuthors(): Promise<Author[]> {
    return this.authorsRepository.find()
  }
}
