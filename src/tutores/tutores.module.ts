import { Module } from '@nestjs/common';
import { TutoresService } from './tutores.service';
import { TutoresController } from './tutores.controller';
import { Tutore } from './entities/tutore.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [TutoresController],
  providers: [TutoresService],
  imports: [TypeOrmModule.forFeature([Tutore])], // Assuming Tutor entity is defined in the same directory
})
export class TutoresModule {}
