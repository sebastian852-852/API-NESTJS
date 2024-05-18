import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CrudUsuarioService } from './crud-usuario.service';
import { CreateCrudUsuarioDto } from './dto/create-crud-usuario.dto';
import { UpdateCrudUsuarioDto } from './dto/update-crud-usuario.dto';

@Controller('crud-usuario')
export class CrudUsuarioController {
  constructor(private readonly crudUsuarioService: CrudUsuarioService) {}

  @Post()
  create(@Body() createCrudUsuarioDto: CreateCrudUsuarioDto) {
    return this.crudUsuarioService.create(createCrudUsuarioDto);
  }

  @Get()
  findAll() {
    return this.crudUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id',ParseUUIDPipe) id: string) {
    return this.crudUsuarioService.findOne(id);
  }

  @Patch(':id')
  update(
  @Param('id',ParseUUIDPipe) id: string,
  @Body() updateCrudUsuarioDto: UpdateCrudUsuarioDto)
   {
    return this.crudUsuarioService.update(id, updateCrudUsuarioDto);
  }

  @Delete(':id')
  remove(@Param('id',ParseUUIDPipe) id: string) {
    return this.crudUsuarioService.remove(id);
  }
}
