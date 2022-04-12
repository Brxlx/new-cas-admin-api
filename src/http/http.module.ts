import { Module } from '@nestjs/common';

import { ConfigModule } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';
import { TestController } from './test.controller';

@Module({
  imports: [ConfigModule, DatabaseModule],
  controllers: [TestController],
})
export class HttpModule {}
