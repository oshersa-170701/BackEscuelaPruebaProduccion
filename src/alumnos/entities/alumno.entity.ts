import { Grupochido } from "src/grupos/entities/grupo.entity";
import { Tutore } from "src/tutores/entities/tutore.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Alummno {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    apellidoP: string;
    @Column()
    apellidoM: string;

    @ManyToOne(()=>Tutore,(tutore)=>tutore.alumno)
    tutor:Tutore

    @ManyToOne(()=>Grupochido,(grupo)=>grupo.alumno)
    grupo:Grupochido
    

    @CreateDateColumn()
    createdAt: Date;


}
