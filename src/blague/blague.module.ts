import { Module } from '@nestjs/common';

import { PrismaModule } from 'src/prisma/prisma.module'; // Importer PrismaModule
import { BlagueService } from './blague.service';
import { BlagueController } from './blague.controller';

@Module({
  imports: [PrismaModule], // Importer PrismaModule
  providers: [BlagueService],
  controllers: [BlagueController],
})
export class BlagueModule {}
