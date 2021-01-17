import { Post } from "@app/posts/post.model"
import { define } from "typeorm-seeding"

define(Post, (faker: Faker.FakerStatic) => {
  const post = new Post()
  post.authorId = faker.random.number({
    min: 1,
    max: 1000,
  })
  post.title = faker.company.companyName()
  post.vote = faker.random.number({
    min: 0,
    max: 1000,
  })

  return post
})
