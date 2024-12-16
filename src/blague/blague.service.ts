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
        id: id,
      },
    });
  }

  async getRandomBlague() {
    try {
      const randomBlague = await this.prisma.blague.findFirst({});

      if (!randomBlague) {
        return { message: 'Aucune blague trouvée.' };
      }

      return randomBlague;
    } catch (error) {
      console.error('Erreur dans getRandomBlague:', error.message);
      throw new Error(
        'Une erreur est survenue lors de la récupération de la blague.',
      );
    }
  }
}
