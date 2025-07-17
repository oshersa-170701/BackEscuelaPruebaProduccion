import { Alummno } from "src/alumnos/entities/alumno.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Grupochido {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @OneToMany(()=>Alummno,(alumno)=>alumno.grupo)
    alumno:Alummno
    @CreateDateColumn()
    createdAt: Date;
}
