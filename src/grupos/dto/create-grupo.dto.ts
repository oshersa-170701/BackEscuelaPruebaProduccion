import { IsNotEmpty, IsString } from "class-validator";

export class CreateGrupoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;
}
