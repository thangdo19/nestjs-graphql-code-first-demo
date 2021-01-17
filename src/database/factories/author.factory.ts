import { Author } from "@app/authors/author.model"
import { define } from "typeorm-seeding"

define(Author, (faker: Faker.FakerStatic) => {
  const author = new Author()
  author.firstName = faker.name.firstName()
  author.lastName = faker.name.lastName()

  return author
})
