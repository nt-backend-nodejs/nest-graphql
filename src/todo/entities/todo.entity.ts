import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Todo {
   @Field(type => Int)
   id: number;

   @Field()
   name: string

}
