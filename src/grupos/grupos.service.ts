import { Injectable } from '@nestjs/common';
import { CreateGrupoDto } from './dto/create-grupo.dto';
import { UpdateGrupoDto } from './dto/update-grupo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Grupochido } from './entities/grupo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GruposService {
  @InjectRepository(Grupochido)
  private readonly grupoRepository: Repository<Grupochido>;

  create(createGrupoDto: CreateGrupoDto) {
    const grupo = this.grupoRepository.create(createGrupoDto);
    return this.grupoRepository.save(grupo);
  }

  findAll() {
    return this.grupoRepository.find();
  }

  findOne(id: number) {
    return this.grupoRepository.findOne({ where: { id } });
  }

  update(id: number, updateGrupoDto: UpdateGrupoDto) {
    return this.grupoRepository.update(id, updateGrupoDto);
  }

  remove(id: number) {
    return this.grupoRepository.delete(id);
  }
}
