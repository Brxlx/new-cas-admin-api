import { Injectable } from '@nestjs/common';
import { Event } from '@prisma/client';

import { PrismaService } from '../../../../database/prisma/prisma.service';

@Injectable()
export class EventRepository {
  constructor(private prisma: PrismaService) {}

  async listAllEvents(): Promise<Event[]> {
    return this.prisma.event.findMany({
      orderBy: [{ createdAt: 'desc' }],
    });
  }
}
