import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { BlagueService } from './blague.service';
import { CreateBlagueDto } from './dto/create-blague.dto';

@Controller('')
export class BlagueController {
  constructor(private readonly blagueService: BlagueService) {}

  @Get('/blague')
  getAllBlague() {
    return this.blagueService.getAllBlague();
  }

  @Post('/create')
  createBlague(@Body() dto: CreateBlagueDto) {
    return this.blagueService.InsertNewBlague(dto);
  }

  @Get('/blague/:id')
  GetBlagueViaId(@Param('id') id: string) {
    return this.blagueService.GetBlagueViaId(Number(id));
  }
}
