import { IsNotEmpty, IsString } from "class-validator";
import { Grupochido } from "src/grupos/entities/grupo.entity";
import { Tutore } from "src/tutores/entities/tutore.entity";

export class CreateAlumnoDto {
    @IsString()
    @IsNotEmpty()
    nombre: string;

    @IsString()
    @IsNotEmpty()
    apellidoP: string;

    @IsString()
    @IsNotEmpty()
    apellidoM: string;
    @IsNotEmpty()
    tutor:Tutore;
    @IsNotEmpty()
    grupo:Grupochido;

}
