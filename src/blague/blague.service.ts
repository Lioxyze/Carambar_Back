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
    const count = await this.prisma.blague.count(); // Compte le nombre total de blagues.
    if (count === 0) {
      return { message: 'Aucune blague trouvée.' }; // Si aucune blague n'existe.
    }
    const randomIndex = Math.floor(Math.random() * count); // Génère un index aléatoire.
    const randomBlague = await this.prisma.blague.findMany({
      skip: randomIndex,
      take: 1,
    });
    return randomBlague[0]; // Retourne la première (et unique) blague sélectionnée.
  }
}
