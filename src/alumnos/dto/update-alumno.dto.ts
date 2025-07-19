import { PartialType } from '@nestjs/mapped-types';
import { CreateAlumnoDto } from './create-alumno.dto';
import { IsOptional, IsString } from 'class-validator';
import { Grupochido } from 'src/grupos/entities/grupo.entity';
import { Tutore } from 'src/tutores/entities/tutore.entity';

export class UpdateAlumnoDto  {
    @IsString()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsOptional()
    apellidoP: string;

    @IsString()
    @IsOptional()
    apellidoM: string;

    @IsOptional()
    tutor:Tutore;
    @IsOptional()
    grupo:Grupochido;
}
