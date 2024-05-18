import { IsDateString, IsDecimal, IsEmail, IsIn, IsString, MaxLength, MinLength } from "class-validator";

export class CreateCrudUsuarioDto {


    @IsString()
    @MinLength(1)
    @MaxLength(30)
    Firtsname: string;

    @IsString()
    @MinLength(1)
    @MaxLength(30)
    Middlename: string;
    

    @IsString()
    @MinLength(1)
    @MaxLength(60)
    Lastname: string;
    

    @IsString()
    @IsEmail()
    @MinLength(1)
    email: string;
    
    @IsIn(['C.C', 'T.I'])
    typeDocument: string;
    
    @IsDecimal()
    @MinLength(1)
    @MaxLength(10)
    document: number;
    

    @IsDecimal()
    @MinLength(1)
    @MaxLength(10)
    phone: number;



    @IsDateString()
    datebirth: Date;


    
    @IsIn(['Masculino', 'Femenino', 'No binario', 'Prefiero no responder'])
    gender: string;


    @IsString()
    photo: string;

}
