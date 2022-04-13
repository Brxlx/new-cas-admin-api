import { Args, Query, Resolver } from '@nestjs/graphql';

import { FindEventService } from '../../../../domain/modules/event/find/findEvent.service';
import { ListEventService } from '../../../../domain/modules/event/list/listEvent.service';
import { Event } from '../models/event';

@Resolver()
export class EventResolver {
  constructor(
    private listEventService: ListEventService,
    private findEventService: FindEventService
  ) {}

  @Query(() => [Event])
  async findAllEvents() {
    return this.listEventService.execute();
  }

  @Query(() => Event)
  async findEventById(@Args('id') id: string) {
    return this.findEventService.execute(id);
  }
}
