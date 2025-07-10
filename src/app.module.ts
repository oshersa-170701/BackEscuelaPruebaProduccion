import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GruposModule } from './grupos/grupos.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '',
    database: 'escuelaDB',
    synchronize: true,
    autoLoadEntities: true,
  }), GruposModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
