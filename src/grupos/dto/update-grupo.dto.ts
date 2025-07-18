import { PartialType } from '@nestjs/mapped-types';
import { CreateGrupoDto } from './create-grupo.dto';
import { IsNotEmpty, IsString } from 'class-validator';

export class UpdateGrupoDto  {
    @IsString()
    @IsNotEmpty()
    nombre: string;
}
