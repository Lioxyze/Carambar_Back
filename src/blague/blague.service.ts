import { Injectable } from '@nestjs/common';
import { CreateBlagueDto } from './dto/create-blague.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BlagueService {
  constructor(private prisma: PrismaService) {}

  async getAllBlague() {
    const blagues = await this.prisma.blague.findMany();
    return {
      totalResults: blagues.length,
      blagues: blagues,
    };
  }

  async InsertNewBlague(dto: CreateBlagueDto) {
    const newBlague = await this.prisma.blague.create({
      data: {
        blagues: dto.blagues,
        reponse: dto.reponse,
      },
    });
    return newBlague;
  }

  async GetBlagueViaId(id: number) {
    return this.prisma.blague.findMany({
      where: {
        id: id, // Pas besoin d'utiliser 'equals'
      },
    });
  }
}
