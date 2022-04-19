import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';

import { CreateUserDTO } from '../dtos/CreateUserDTO';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserService {
  constructor(private userRepository: UserRepository) {}

  async execute(data: CreateUserDTO): Promise<User> {
    return this.userRepository.create(data);
  }
}
