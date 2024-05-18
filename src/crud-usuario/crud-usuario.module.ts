import { Module } from '@nestjs/common';
import { CrudUsuarioService } from './crud-usuario.service';
import { CrudUsuarioController } from './crud-usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudUsuario } from './entities/crud-usuario.entity';

@Module({
  controllers: [CrudUsuarioController],
  providers: [CrudUsuarioService],
  imports: [
    TypeOrmModule.forFeature([CrudUsuario])
  ]
})
export class CrudUsuarioModule {}
