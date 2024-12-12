import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { PrismaController } from './prisma.controller';
import { ConfigModule } from '@nestjs/config'; // Importer ConfigModule

@Module({
  imports: [ConfigModule], // Assurez-vous que ConfigModule est importé
  controllers: [PrismaController],
  providers: [PrismaService],
  exports: [PrismaService], //   Exporter PrismaService pour qu'il soit utilisé dans d'autres modules
})
export class PrismaModule {}
