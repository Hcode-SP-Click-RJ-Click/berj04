import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreatePlaceDTO {
  @IsNotEmpty({ message: 'O Campo nome não pode ser vazio' })
  @IsString({
    message:
      'Este dado que você esta tentando enviar, não é uma string! não vou deixar passar.',
  })
  name: string;

  @IsNotEmpty({ message: 'O Campo categoryId não pode ser vazio' })
  @IsNumber({}, { message: 'Tipo de dado inválido' })
  categoryId: number;
}
