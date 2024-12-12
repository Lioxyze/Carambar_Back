import { IsString } from 'class-validator';

export class CreateBlagueDto {
  @IsString()
  blagues: string;

  @IsString()
  reponse: string;
}
