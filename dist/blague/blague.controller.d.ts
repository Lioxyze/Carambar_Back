import { BlagueService } from './blague.service';
import { CreateBlagueDto } from './dto/create-blague.dto';
export declare class BlagueController {
    private readonly blagueService;
    constructor(blagueService: BlagueService);
    getAllBlague(): Promise<{
        totalResults: number;
        blagues: {
            id: number;
            blagues: string;
            reponse: string;
        }[];
    }>;
    createBlague(dto: CreateBlagueDto): Promise<{
        id: number;
        blagues: string;
        reponse: string;
    }>;
    GetBlagueViaId(id: string): Promise<{
        id: number;
        blagues: string;
        reponse: string;
    }[]>;
}
