import { Module } from '@nestjs/common';
import { ConfigModule as GlobalConfigModule } from '@nestjs/config';

@Module({
  imports: [GlobalConfigModule.forRoot()],
})
export class ConfigModule {}
