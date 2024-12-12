import { IsString } from 'class-validator';

export class CreateBlagueDto {
  @IsString()
  text: string;

  @IsString()
  id: string;

  reponse: string;
}
