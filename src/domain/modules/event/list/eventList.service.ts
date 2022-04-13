import { Injectable } from '@nestjs/common';

import { EventRepository } from '../repositories/event.repository';

@Injectable()
export class EventListService {
  constructor(private eventRepository: EventRepository) {}

  async execute() {
    return this.eventRepository.listAllEvents();
  }
}
