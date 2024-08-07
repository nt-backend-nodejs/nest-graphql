import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateTodoInput {
  @Field(() => Int!, { description: 'Example field (placeholder)' })
  id: number;


  @Field()
  name: string
}
