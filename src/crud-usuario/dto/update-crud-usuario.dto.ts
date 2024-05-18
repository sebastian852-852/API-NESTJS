import { PartialType } from '@nestjs/mapped-types';
import { CreateCrudUsuarioDto } from './create-crud-usuario.dto';

export class UpdateCrudUsuarioDto extends PartialType(CreateCrudUsuarioDto) {}
