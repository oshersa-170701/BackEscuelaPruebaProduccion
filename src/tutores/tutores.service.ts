import { Injectable } from '@nestjs/common';
import { CreateTutoreDto } from './dto/create-tutore.dto';
import { UpdateTutoreDto } from './dto/update-tutore.dto';

@Injectable()
export class TutoresService {
  create(createTutoreDto: CreateTutoreDto) {
  }

  findAll() {
  }

  findOne(id: number) {
  }

  update(id: number, updateTutoreDto: UpdateTutoreDto) {
  }

  remove(id: number) {
  }
}
