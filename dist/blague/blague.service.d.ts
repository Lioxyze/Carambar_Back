import { CreateBlagueDto } from './dto/create-blague.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BlagueService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllBlague(): Promise<{
        totalResults: number;
        blagues: {
            id: number;
            blagues: string;
            reponse: string;
        }[];
    }>;
    InsertNewBlague(dto: CreateBlagueDto): Promise<{
        id: number;
        blagues: string;
        reponse: string;
    }>;
    GetBlagueViaId(id: number): Promise<{
        id: number;
        blagues: string;
        reponse: string;
    }[]>;
}
