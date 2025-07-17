import { PartialType } from '@nestjs/mapped-types';
import { CreateAdministradoreDto } from './create-administradore.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAdministradoreDto   {
    @IsString()
    @IsOptional()
    nombre: string;

    @IsString()
    @IsOptional()
    correo: string;

    @IsString()
    @IsOptional()
    contrasena: string;
}
