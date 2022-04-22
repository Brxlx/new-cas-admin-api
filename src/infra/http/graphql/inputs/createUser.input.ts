import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createUserInput {
  @Field()
  name: string;

  @Field()
  username: string;

  @Field({ nullable: true })
  phone?: string;

  @Field()
  password: string;

  @Field({ nullable: true })
  avatar?: string;

  @Field({ nullable: true })
  company?: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  email: string;

  @Field({ defaultValue: true })
  isActive: boolean;

  @Field({ defaultValue: false })
  isAdmin: boolean;

  @Field({ defaultValue: true })
  isClient: boolean;

  @Field({ defaultValue: new Date(Date.now()) })
  createdAt: Date;

  @Field({ defaultValue: new Date(Date.now()) })
  updatedAt: Date;
}
