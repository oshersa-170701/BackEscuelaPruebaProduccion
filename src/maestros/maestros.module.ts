import { Module } from '@nestjs/common';
import { MaestrosService } from './maestros.service';
import { MaestrosController } from './maestros.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Maestro } from './entities/maestro.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Maestro])],  
  controllers: [MaestrosController],
  providers: [MaestrosService],
})
export class MaestrosModule {}
