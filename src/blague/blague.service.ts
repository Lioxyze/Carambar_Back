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
      // Récupérer une blague aléatoire sans calcul de total
      const randomBlague = await this.prisma.blague.findFirst({
        orderBy: { id: 'desc' }, // Tri par ordre décroissant pour éviter des décalages inutiles
        skip: Math.floor(Math.random() * 100), // Skip aléatoire basé sur une valeur arbitraire, ajustez selon les besoins
      });

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
