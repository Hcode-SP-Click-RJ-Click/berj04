import { IsString } from 'class-validator';

export class CreatePlaceDTO {
  @IsString({
    message:
      'Este dado que você esta tentando enviar, não é uma string! não vou deixar passar.',
  })
  name: string;
}
