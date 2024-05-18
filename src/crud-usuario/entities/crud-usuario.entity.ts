import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class CrudUsuario {
   
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    Firtsname: string;

    @Column()
    Middlename: string;

    @Column()
    Lastname: string;

    @Column()
    email: string;
    
    @Column()
    typeDocument: string;

    @Column()
    document: number;

    @Column()
    phone: number;

    @Column()
    datebirth: Date;

    @Column()
    gender: string;

    @Column()
    photo: string;
}
