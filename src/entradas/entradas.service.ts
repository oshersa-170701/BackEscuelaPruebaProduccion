import {
  Injectable,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between, Not } from 'typeorm';
import { CreateEntradaDto } from './dto/create-entrada.dto';
import { Entrada } from './entities/entrada.entity';
import { Alummno } from 'src/alumnos/entities/alumno.entity';
import { UpdateEntradaDto } from './dto/update-entrada.dto';

@Injectable()
export class EntradasService {
  constructor(
    @InjectRepository(Entrada)
    private readonly entradaRepo: Repository<Entrada>,

    @InjectRepository(Alummno)
    private readonly alumnoRepo: Repository<Alummno>,
  ) {}

  async create(createEntradaDto: CreateEntradaDto) {
    const alumno = await this.alumnoRepo.findOne({
      where: { id: createEntradaDto.alumnoId },
    });
    if (!alumno) {
      throw new NotFoundException('Alumno no encontrado');
    }

    const inicioDia = new Date();
    inicioDia.setHours(0, 0, 0, 0);
    const finDia = new Date();
    finDia.setHours(23, 59, 59, 999);

    const yaExiste = await this.entradaRepo.findOne({
      where: {
        alumno: { id: createEntradaDto.alumnoId },
        DateEntrada: Between(inicioDia, finDia),
      },
    });

    if (yaExiste) {
      throw new ConflictException(
        'El alumno ya tiene una entrada registrada hoy.',
      );
    }

    const entrada = this.entradaRepo.create({ alumno });
    return this.entradaRepo.save(entrada);
  }
  findAll() {
    return this.entradaRepo.find({ relations: ['alumno'] });
  }

  findOne(id: number) {
    return this.entradaRepo.findOne({ where: { id }, relations: ['alumno'] });
  }

  async update(id: number, updateEntradaDto: UpdateEntradaDto) {
    // Buscar la entrada por ID
    const entrada = await this.entradaRepo.findOne({
      where: { id },
      relations: ['alumno'],
    });
    if (!entrada) {
      throw new NotFoundException('Entrada no encontrada');
    }

    // Si se quiere cambiar el alumno, validar que exista
    if (
      updateEntradaDto.alumnoId &&
      updateEntradaDto.alumnoId !== entrada.alumno.id
    ) {
      const alumno = await this.alumnoRepo.findOne({
        where: { id: updateEntradaDto.alumnoId },
      });
      if (!alumno) {
        throw new NotFoundException('Alumno para actualización no encontrado');
      }
      entrada.alumno = alumno;
    }

    // Si se quiere actualizar la fecha de entrada, validar que no haya otra asistencia ese día para ese alumno
    if (updateEntradaDto.DateEntrada) {
      const fecha = new Date(updateEntradaDto.DateEntrada);
      const inicioDia = new Date(fecha);
      inicioDia.setHours(0, 0, 0, 0);
      const finDia = new Date(fecha);
      finDia.setHours(23, 59, 59, 999);

      const existeOtraEntrada = await this.entradaRepo.findOne({
        where: {
          alumno: { id: entrada.alumno.id },
          DateEntrada: Between(inicioDia, finDia),
          id: Not(id), // Excluir la entrada actual
        },
      });

      if (existeOtraEntrada) {
        throw new ConflictException(
          'El alumno ya tiene una asistencia registrada para esa fecha.',
        );
      }
      entrada.DateEntrada = fecha;
    }

    // Actualizar cualquier otro campo que venga en el DTO
    Object.assign(entrada, updateEntradaDto);

    // Guardar cambios
    return this.entradaRepo.save(entrada);
  }

  remove(id: number) {
    return this.entradaRepo.delete(id);
  }
}
