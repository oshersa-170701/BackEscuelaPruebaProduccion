import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Administradore {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    nombre: string;
    @Column()
    correo: string;
    @Column()
    contrasena: string;
}
