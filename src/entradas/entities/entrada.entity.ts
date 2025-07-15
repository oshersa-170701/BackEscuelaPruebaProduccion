import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Entrada {
    @PrimaryGeneratedColumn()
    id: number;
    @CreateDateColumn()
    DateEntrada: Date;
    @Column()
    alumno: string;
}
