import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateCategoriesDTO {
  @IsNotEmpty({ message: 'O Campo nome da categoria, não pode estar vazio' })
  @IsString()
  name: string;
}
