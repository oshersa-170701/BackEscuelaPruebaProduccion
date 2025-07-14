import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Horario {
    @PrimaryColumn()
    id: number;
    @Column()
    dia: string;
    @Column()
    horaInicio: string;
    @Column()
    horaFin: string;
    @Column()
    materia: string;

}
