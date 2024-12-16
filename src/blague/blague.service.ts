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
      const count = await this.prisma.blague.count();

      if (count === 0) {
        return { message: 'Aucune blague trouvée.' };
      }

      const randomIndex = Math.floor(Math.random() * count);
      const randomBlague = await this.prisma.blague.findFirst({
        skip: randomIndex,
      });

      if (!randomBlague) {
        return { message: 'Erreur lors de la récupération de la blague.' };
      }

      return randomBlague;
    } catch (error) {
      console.error('Erreur Prisma :', error.message);
      return { message: 'Une erreur est survenue.' };
    }
  }
}
