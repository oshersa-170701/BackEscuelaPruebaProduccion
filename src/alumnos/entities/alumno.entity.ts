import { Entrada } from 'src/entradas/entities/entrada.entity';
import { Grupochido } from 'src/grupos/entities/grupo.entity';
import { Tutore } from 'src/tutores/entities/tutore.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity()
export class Alummno {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  telefono: string;

  @Column({ type: 'longtext', nullable: true })
  imagenBase64: string;

  @ManyToOne(() => Tutore, (tutore) => tutore.alumno, { nullable: true })
  tutor: Tutore;

  @ManyToOne(() => Grupochido, (grupo) => grupo.alumnos, { nullable: false })
  grupo: Grupochido;

  @Column()
  grupoId: number; // <-- campo explícito de FK

  @OneToMany(() => Entrada, (entrada) => entrada.alumno)
  entrada: Entrada[];

  @CreateDateColumn()
  createdAt: Date;
}
