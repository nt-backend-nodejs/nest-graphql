// // user.entity.ts
import { ObjectType, Field, Int } from '@nestjs/graphql';

// @ObjectType()
// export class User {
//   @Field(() => Int)
//   id: number;

//   @Field()
//   username: string;


//   @Field()
//   email: string;

//   @Field()
//   password: string;
// }


import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity() // Entity dekoratorini qo'llang
@ObjectType()

export class User {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;


  // @Field()
  // @Column()
  // username: string;


  @Field()
  @Column()
  email: string;

  @Field()
  @Column()
  password: string;
}
