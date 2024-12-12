import { CreateBlagueDto } from './dto/create-blague.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BlagueService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllBlague(): Promise<{
        totalResults: number;
        blagues: {
            blagues: string;
            reponse: string;
            id: number;
        }[];
    }>;
    InsertNewBlague(dto: CreateBlagueDto): Promise<{
        blagues: string;
        reponse: string;
        id: number;
    }>;
    GetBlagueViaId(id: number): Promise<{
        blagues: string;
        reponse: string;
        id: number;
    }[]>;
}
