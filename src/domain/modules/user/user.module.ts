import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../database/database.module';
import { CreateUserService } from './create/createUser.service';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [DatabaseModule],
  providers: [UserRepository, CreateUserService],
  exports: [UserRepository, CreateUserService],
})
export class UserModule {}
