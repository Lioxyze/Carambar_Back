import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BlagueService } from './blague.service';
import { CreateBlagueDto } from './dto/create-blague.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('Blagues')
@Controller('')
export class BlagueController {
  constructor(private readonly blagueService: BlagueService) {}

  @Get('/blague')
  @ApiOperation({ summary: 'Récupérer toutes les blagues' })
  @ApiResponse({
    status: 200,
    description: 'Liste des blagues récupérée avec succès.',
  })
  @ApiResponse({ status: 404, description: 'Liste des blagues non récupérée.' })
  getAllBlague() {
    return this.blagueService.getAllBlague();
  }

  @Post('/create')
  @ApiOperation({ summary: 'Créer une nouvelle blague' })
  @ApiBody({
    type: CreateBlagueDto,
    description: 'Les données nécessaires pour créer une nouvelle blague',
  })
  @ApiResponse({ status: 201, description: 'Blague créée avec succès.' })
  @ApiResponse({ status: 404, description: 'Blague non créée.' })
  createBlague(@Body() dto: CreateBlagueDto) {
    return this.blagueService.InsertNewBlague(dto);
  }

  @Get('/blague/:id')
  @ApiOperation({ summary: 'Récupérer une blague par ID' })
  @ApiParam({ name: 'id', description: "L'identifiant unique de la blague" })
  @ApiResponse({ status: 200, description: 'Blague récupérée avec succès.' })
  @ApiResponse({ status: 404, description: 'Blague non trouvée.' })
  GetBlagueViaId(@Param('id') id: string) {
    return this.blagueService.GetBlagueViaId(Number(id));
  }
}
