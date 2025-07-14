import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Grupochido {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @CreateDateColumn()
    createdAt: Date;
}
