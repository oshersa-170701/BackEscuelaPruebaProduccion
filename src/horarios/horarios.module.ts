import { Module } from '@nestjs/common';
import { HorariosService } from './horarios.service';
import { HorariosController } from './horarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Horario } from './entities/horario.entity';

@Module({
  controllers: [HorariosController],
  providers: [HorariosService],
  imports: [TypeOrmModule.forFeature([Horario])],
})
export class HorariosModule {}
