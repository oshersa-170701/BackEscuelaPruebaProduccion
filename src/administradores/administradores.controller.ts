import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AdministradoresService } from './administradores.service';
import { CreateAdministradoreDto } from './dto/create-administradore.dto';
import { UpdateAdministradoreDto } from './dto/update-administradore.dto';

@Controller('administradores')
export class AdministradoresController {
  constructor(private readonly administradoresService: AdministradoresService) {}

  @Post("post")
  create(@Body() createAdministradoreDto: CreateAdministradoreDto) {
    return this.administradoresService.create(createAdministradoreDto);
  }

  @Get("getAll")
  findAll() {
    return this.administradoresService.findAll();
  }

  @Get('getOne/:id')
  findOne(@Param('id') id: string) {
    return this.administradoresService.findOne(+id);
  }

  @Patch('update/:id')
  update(@Param('id') id: string, @Body() updateAdministradoreDto: UpdateAdministradoreDto) {
    return this.administradoresService.update(+id, updateAdministradoreDto);
  }

  @Delete('remove/:id')
  remove(@Param('id') id: string) {
    return this.administradoresService.remove(+id);
  }
}
