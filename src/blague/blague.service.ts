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
    const count = await this.prisma.blague.count();
    console.log('Total de blagues :', count);
    if (count === 0) {
      return { message: 'Aucune blague trouvée.' };
    }

    const randomIndex = Math.floor(Math.random() * count);
    console.log('Index aléatoire :', randomIndex);

    const randomBlague = await this.prisma.blague.findMany({
      skip: randomIndex,
      take: 1,
    });
    console.log('Blague récupérée :', randomBlague);

    return randomBlague[0];
  }
}
