import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { version } from '../package.json';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.listen(3000).then(() => Logger.log(`[cas-admin-api][v${version}] Running app`));
}
bootstrap();
