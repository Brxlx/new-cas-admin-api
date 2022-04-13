import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [DatabaseModule, ConfigModule, HttpModule],
})
export class AppModule {}
