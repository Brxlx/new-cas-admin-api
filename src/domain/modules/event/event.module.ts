import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../database/database.module';
import { FindEventService } from './find/findEvent.service';
import { ListEventService } from './list/listEvent.service';
import { EventRepository } from './repositories/event.repository';

@Module({
  imports: [DatabaseModule],
  providers: [EventRepository, ListEventService, FindEventService],
  exports: [EventRepository, ListEventService, FindEventService],
})
export class EventModule {}
