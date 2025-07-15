import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruposModule } from './grupos/grupos.module';
import { TutoresModule } from './tutores/tutores.module';
import { HorariosModule } from './horarios/horarios.module';
import { SalidasModule } from './salidas/salidas.module';
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'escuelita',
    synchronize: true,
    autoLoadEntities: true,
  }), GruposModule, TutoresModule, HorariosModule, SalidasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
