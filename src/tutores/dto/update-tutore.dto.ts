import { PartialType } from '@nestjs/mapped-types';
import { CreateTutoreDto } from './create-tutore.dto';

export class UpdateTutoreDto extends PartialType(CreateTutoreDto) {}
