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
    
    @Column()
    grupo: string;
    @Column()
    maestro: string;
    @CreateDateColumn()
    createdAt: Date;


}
