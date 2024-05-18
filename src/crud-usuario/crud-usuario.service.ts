import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateCrudUsuarioDto } from './dto/create-crud-usuario.dto';
import { UpdateCrudUsuarioDto } from './dto/update-crud-usuario.dto';
import {  In, Repository } from 'typeorm';
import { CrudUsuario } from './entities/crud-usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CrudUsuarioService {

constructor(
  @InjectRepository(CrudUsuario)
  private readonly crudUsuarioRepository: Repository<CrudUsuario>
) {}


  async create(createCrudUsuarioDto: CreateCrudUsuarioDto) {
    
       try {
          let createdDate: Date = new Date(createCrudUsuarioDto.datebirth);
          createCrudUsuarioDto.datebirth = createdDate;
      
          const crudUsuario = this.crudUsuarioRepository.create(createCrudUsuarioDto);
            await this.crudUsuarioRepository.save(crudUsuario);

          return crudUsuario;
                  } 
          catch (error) {
           console.log(error);
            throw new InternalServerErrorException('Ayuda!');
       }

  }




  findAll() {
    return this.crudUsuarioRepository.find({});
  }

  async findOne(id: string) {
    const usuario = await this.crudUsuarioRepository.findOneBy({id});

    if (!usuario) {
      throw new InternalServerErrorException(`Usuario con id ${id} no encontrado`);
    }

    return usuario;
  }

  async update(id: string, updateCrudUsuarioDto: UpdateCrudUsuarioDto) {

    const usuario = await this.crudUsuarioRepository.preload({

      id: id,
      ...updateCrudUsuarioDto
    });

    if (!usuario) {
      throw new InternalServerErrorException(`Usuario con id ${id} no encontrado`);
    }

    await this.crudUsuarioRepository.save(usuario);

    return usuario;
  }

  async remove(id: string) {
    const usuario = await this.findOne(id);
    
    await this.crudUsuarioRepository.remove(usuario);
  }
}
