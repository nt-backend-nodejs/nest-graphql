import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field()
  email: string;


  @Field()
  password: string;
}
