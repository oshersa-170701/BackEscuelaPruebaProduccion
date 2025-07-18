import { Maestro } from "src/maestros/entities/maestro.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Grupochido {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @CreateDateColumn()
    createdAt: Date;
    @OneToMany(() => Maestro, (maestro) => maestro.grupo)
    maestros: Maestro[];
}
