import { Field, Int, ObjectType } from "@nestjs/graphql";
import { Author } from "src/app/authors/author.model";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('posts')
@ObjectType()
export class Post {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number

  @Field(() => Int)
  @Column({ type: 'int' })
  authorId: number

  @Field(() => Author)
  @ManyToOne(() => Author, author => author.posts)
  @JoinColumn({ name: 'authorId' })
  author: Author

  @Field()
  @Column({
    type: 'varchar',
    length: 255,
  })
  title: string

  @Field(() => Int, { nullable: true })
  @Column({ type: 'int' })
  vote?: number
}
