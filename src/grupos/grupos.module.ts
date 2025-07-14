import { Module } from '@nestjs/common';
import { GruposService } from './grupos.service';
import { GruposController } from './grupos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Grupochido } from './entities/grupo.entity';

@Module({
  controllers: [GruposController],
  providers: [GruposService],
  imports:[TypeOrmModule.forFeature([Grupochido])]
})
export class GruposModule {}
