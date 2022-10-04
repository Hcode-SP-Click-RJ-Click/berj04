import { IsArray, IsNotEmpty } from 'class-validator';

export class CreateManyPlacesDTO {
  @IsNotEmpty({ message: 'Este campo não pode ser vazio' })
  @IsArray()
  names: [];
}
