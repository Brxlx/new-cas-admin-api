import { Module } from '@nestjs/common';
import { ConfigModule as GlobalConfigModule } from '@nestjs/config';

@Module({
  imports: [GlobalConfigModule.forRoot({ isGlobal: true })],
})
export class ConfigModule {}
