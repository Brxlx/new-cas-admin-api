import { Query, Resolver } from '@nestjs/graphql';

import { EventListService } from '../../../../domain/modules/event/list/eventList.service';
import { Event } from '../models/event';

@Resolver()
export class EventResolver {
  constructor(private eventListService: EventListService) {}

  @Query(() => [Event])
  async events() {
    return this.eventListService.execute();
  }
}
