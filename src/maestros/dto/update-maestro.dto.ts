import { PartialType } from '@nestjs/mapped-types';
import { CreateMaestroDto } from './create-maestro.dto';
import { IsEmail, IsNumber, IsOptional, IsString } from 'class-validator';
import { Grupochido } from 'src/grupos/entities/grupo.entity';

export class UpdateMaestroDto  {
    @IsString()
    @IsOptional()
    nombre: string;

   @IsString()
    @IsOptional()
    apellido: string;

    @IsOptional()
    @IsNumber()
    telefono: number;

    @IsString()
    @IsOptional()
    @IsEmail()
    correo: string;

    @IsString()
    @IsOptional()
    contrasena: string;
    @IsOptional()
    grupo: Grupochido;
}
