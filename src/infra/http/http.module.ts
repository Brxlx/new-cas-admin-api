import { Module } from '@nestjs/common';

import { ConfigModule } from '../../config/config.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [ConfigModule, GraphqlModule],
})
export class HttpModule {}
