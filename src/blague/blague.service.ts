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

      // Générer un index aléatoire
      const randomIndex = Math.floor(Math.random() * count);

      // Récupérer une blague en sautant jusqu'à l'index
      const randomBlague = await this.prisma.blague.findMany({
        skip: randomIndex,
        take: 1, // Limiter à une seule blague
      });

      if (!randomBlague.length) {
        return { message: 'Erreur lors de la récupération de la blague.' };
      }

      return randomBlague[0]; // Retourne la blague
    } catch (error) {
      console.error('Erreur Prisma :', error.message);
      return { message: 'Une erreur est survenue.' };
    }
  }
}
