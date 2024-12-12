import { BlagueService } from './blague.service';
import { CreateBlagueDto } from './dto/create-blague.dto';
export declare class BlagueController {
    private readonly blagueService;
    constructor(blagueService: BlagueService);
    getAllBlague(): Promise<{
        totalResults: number;
        blagues: {
            blagues: string;
            reponse: string;
            id: number;
        }[];
    }>;
    createBlague(dto: CreateBlagueDto): Promise<{
        blagues: string;
        reponse: string;
        id: number;
    }>;
    GetBlagueViaId(id: string): Promise<{
        blagues: string;
        reponse: string;
        id: number;
    }[]>;
}
