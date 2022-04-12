import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { DatabaseModule } from './database/database.module';
import { HttpModule } from './http/http.module';

@Module({
  imports: [DatabaseModule, ConfigModule, HttpModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
