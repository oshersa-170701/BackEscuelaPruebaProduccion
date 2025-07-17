import { Alummno } from "src/alumnos/entities/alumno.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Entrada {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne(()=>Alummno,(alumno)=>alumno.entrada)
    alumno:Alummno
    
    @CreateDateColumn()
    DateEntrada: Date;
}
