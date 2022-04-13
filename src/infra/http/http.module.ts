import { Module } from '@nestjs/common';

import { ConfigModule } from '../../config/config.module';
import { DatabaseModule } from '../../database/database.module';
import { EventModule } from '../../domain/modules/event/event.module';
import { GraphqlModule } from './graphql/graphql.module';

@Module({
  imports: [ConfigModule, DatabaseModule, GraphqlModule, EventModule],
})
export class HttpModule {}
