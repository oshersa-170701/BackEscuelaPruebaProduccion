import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
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
    grupo: string;
    @Column({ unique: true })
    email: string;
    @Column({ select: false })
    password: string;
    @CreateDateColumn()
    createdAt: Date;
}
