import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CreateUserService } from '../../../../domain/modules/user/create/createUser.service';
import { createUserInput } from '../inputs/createUser.input';
import { User } from '../models/user';

@Resolver()
export class UserResolver {
  constructor(private createUserService: CreateUserService) {}

  @Mutation(() => User)
  async createUser(@Args('data') data: createUserInput): Promise<User> {
    return this.createUserService.execute(data);
  }
}
