import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../database/database.module';
import { EventListService } from './list/eventList.service';
import { EventRepository } from './repositories/event.repository';

@Module({
  imports: [DatabaseModule],
  providers: [EventRepository, EventListService],
  exports: [EventRepository, EventListService],
})
export class EventModule {}
