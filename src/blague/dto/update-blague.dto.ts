import { PartialType } from '@nestjs/mapped-types';
import { CreateBlagueDto } from './create-blague.dto';

export class UpdateBlagueDto extends PartialType(CreateBlagueDto) {}
