import { Module } from '@nestjs/common';

import { ConfigModule } from '../config/config.module';
import { DatabaseModule } from '../database/database.module';
import { GraphqlModule } from './graphql/graphql.module';
import { TestResolver } from './test.resolver';

@Module({
  imports: [ConfigModule, DatabaseModule, GraphqlModule],
  providers: [TestResolver],
})
export class HttpModule {}
