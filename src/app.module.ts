import { Module } from '@nestjs/common';

import { ConfigModule } from './config/config.module';
import { HttpModule } from './infra/http/http.module';

@Module({
  imports: [ConfigModule, HttpModule],
})
export class AppModule {}
