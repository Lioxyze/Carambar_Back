import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBlagueDto {
  @ApiProperty({
    description: 'Le texte de la blague',
    example:
      "Pourquoi les plongeurs plongent-ils en arrière ? Parce qu'ils tombent dans l'eau !",
  })
  @IsString()
  blagues: string;

  @ApiProperty({
    description: 'La réponse à la blague',
    example: 'Parce que sinon ils tombent dans le bateau.',
  })
  @IsString()
  reponse: string;
}
