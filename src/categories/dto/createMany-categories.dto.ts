import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateManyCategoriesDTO {
  @IsNotEmpty({ message: 'O campo categorias não pode ser vazio' })
  @IsArray()
  names: [];
}
