import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from '../posts/post.model';
// import { Post } from './post';

@Entity('authors')
@ObjectType()
export class Author {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: 'int' })
  id: number;

  @Field({
    description: "Author's first name",
    nullable: true,
  })
  @Column({
    type: 'varchar',
    length: 255
  })
  firstName?: string;

  @Field({
    description: "Author's last name",
    nullable: true,
  })
  @Column({
    type: 'varchar',
    length: 255
  })
  lastName?: string;

  @Field(() => [Post])
  @OneToMany(() => Post, post => post.author)
  posts: Post[];
}
