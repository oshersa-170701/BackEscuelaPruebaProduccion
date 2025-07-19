import { PartialType } from '@nestjs/mapped-types';
import { CreateTutoreDto } from './create-tutore.dto';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateTutoreDto  {
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
        parentesco: string;
        @IsString()
        @IsOptional()
        email: string;
        @IsString()
        @IsOptional()
        contrasena: string;
}
