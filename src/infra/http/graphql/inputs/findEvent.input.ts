import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class findEventInput {
  @Field()
  id: string;
}
