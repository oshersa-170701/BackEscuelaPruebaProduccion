import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruposModule } from './grupos/grupos.module';
import { TutoresModule } from './tutores/tutores.module';
import { HorariosModule } from './horarios/horarios.module';
import { SalidasModule } from './salidas/salidas.module';
import { AlumnosModule } from './alumnos/alumnos.module';
import { MaestrosModule } from './maestros/maestros.module';
import { EntradasModule } from './entradas/entradas.module';
import { AdministradoresModule } from './administradores/administradores.module';
@Module({
  imports: [ TypeOrmModule.forRoot({
    type: 'mysql',
    url: 'mysql://root:twdlmzjSsrthYiEpKhkBcxOlKplVoxbw@mysql.railway.internal:3306/railway',
    synchronize: true,
    autoLoadEntities: true,
  }), GruposModule, TutoresModule, HorariosModule, SalidasModule, AlumnosModule, MaestrosModule, EntradasModule, AdministradoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
