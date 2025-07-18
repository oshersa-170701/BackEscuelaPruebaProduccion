import { Alummno } from "src/alumnos/entities/alumno.entity";
import { Grupochido } from "src/grupos/entities/grupo.entity";
import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Maestro {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    apellido: string;
    @Column()
    telefono: number;
    @Column()    
    correo: string;
    @Column()
    contrasena: string;

    @ManyToOne(()=> Grupochido, (grupo) => grupo.maestros)
    grupo: Grupochido;

    @CreateDateColumn()
    createdAt: Date;
}
