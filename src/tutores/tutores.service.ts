import { Injectable } from '@nestjs/common';
import { CreateTutoreDto } from './dto/create-tutore.dto';
import { UpdateTutoreDto } from './dto/update-tutore.dto';

@Injectable()
export class TutoresService {
  create(createTutoreDto: CreateTutoreDto) {
    return 'This action adds a new tutore';
  }

  findAll() {
    return `This action returns all tutores`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tutore`;
  }

  update(id: number, updateTutoreDto: UpdateTutoreDto) {
    return `This action updates a #${id} tutore`;
  }

  remove(id: number) {
    return `This action removes a #${id} tutore`;
  }
}
