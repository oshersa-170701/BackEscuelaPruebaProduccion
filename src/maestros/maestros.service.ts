import { Injectable } from '@nestjs/common';
import { CreateMaestroDto } from './dto/create-maestro.dto';
import { UpdateMaestroDto } from './dto/update-maestro.dto';
import { In, Repository } from 'typeorm';
import { Maestro } from './entities/maestro.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class MaestrosService {
  @InjectRepository(Maestro)
  private  maestroRepository: Repository<Maestro>;

  create(createMaestroDto: CreateMaestroDto) {
    const maestro = this.maestroRepository.create(createMaestroDto);
    return this.maestroRepository.save(maestro);
  }

  findAll() {
    return this.maestroRepository.find();
  }

  findOne(id: number) {
    return this.maestroRepository.findOneBy({ id });
  }

  update(id: number, updateMaestroDto: UpdateMaestroDto) {
    return this.maestroRepository.update(id, updateMaestroDto);
  }

  remove(id: number) {
    return this.maestroRepository.delete(id);
  }
}
