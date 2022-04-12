import { Controller, Get } from '@nestjs/common';

import { PrismaService } from '../database/prisma/prisma.service';

@Controller('test')
export class TestController {
  constructor(private prisma: PrismaService) {}

  @Get()
  async handle() {
    return this.prisma.user.findMany({
      take: 5,
      orderBy: [
        {
          createdAt: 'desc',
        },
      ],
    });
  }
}
