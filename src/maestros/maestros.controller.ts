import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaestrosService } from './maestros.service';
import { CreateMaestroDto } from './dto/create-maestro.dto';
import { UpdateMaestroDto } from './dto/update-maestro.dto';

@Controller('maestros')
export class MaestrosController {
  constructor(private readonly maestrosService: MaestrosService) {}

  @Post()
  create(@Body() createMaestroDto: CreateMaestroDto) {
    return this.maestrosService.create(createMaestroDto);
  }

  @Get()
  findAll() {
    return this.maestrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maestrosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaestroDto: UpdateMaestroDto) {
    return this.maestrosService.update(+id, updateMaestroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maestrosService.remove(+id);
  }
}
