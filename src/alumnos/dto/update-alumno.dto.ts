import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateAlumnoDto {
  @IsString()
  @IsNotEmpty()
  nombre: string;

  @IsString()
  @IsNotEmpty()
  apellido: string;

  @IsOptional()
  @IsString()
  correo?: string;

  @IsOptional()
  @IsString()
  telefono?: string;

  @IsOptional()
  @IsString()
  imagenBase64?: string;

  @IsNotEmpty()
  grupoId: number;
}
