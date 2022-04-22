import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => ID)
  id: string;

  @Field()
  name: string;

  @Field()
  username: string;

  @Field()
  phone: string;

  @Field()
  password: string;

  @Field()
  avatar: string;

  @Field()
  company: string;

  @Field()
  description: string;

  @Field()
  email: string;

  @Field()
  groups?: string;

  @Field()
  isActive: boolean;

  @Field()
  isAdmin: boolean;

  @Field()
  isClient: boolean;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => Date)
  updatedAt: Date;
}
