import { Module } from '@nestjs/common';

import { PrismaModule } from './prisma/prisma.module';
import { BlagueModule } from './blague/blague.module';

@Module({
  imports: [PrismaModule, BlagueModule],
})
export class AppModule {}
