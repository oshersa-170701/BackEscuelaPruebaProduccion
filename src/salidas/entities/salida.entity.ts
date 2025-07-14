import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Salida {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    fecha: Date;
    @Column()
    horaSalida: string;
    @Column()
    nanbre_Recoge: string;
}
