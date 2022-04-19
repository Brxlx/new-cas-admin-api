import path from 'path';

import { ApolloDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import { EventModule } from '../../../domain/modules/event/event.module';
import { UserModule } from '../../../domain/modules/user/user.module';
import { EventResolver } from './resolvers/event.resolver';
import { UserResolver } from './resolvers/user.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: path.resolve(process.cwd(), 'src/infra/http/graphql/schema.gql'),
    }),
    EventModule,
    UserModule,
  ],
  providers: [EventResolver, UserResolver],
})
export class GraphqlModule {}
