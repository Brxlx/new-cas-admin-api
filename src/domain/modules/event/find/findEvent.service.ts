import { Injectable } from '@nestjs/common';

import { EventRepository } from '../repositories/event.repository';

@Injectable()
export class FindEventService {
  constructor(private eventRepository: EventRepository) {}

  async execute(id: string) {
    return this.eventRepository.findEventById(id);
  }
}
