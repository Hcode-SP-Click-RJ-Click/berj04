import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  listPlaces() {
    return 'Aqui estão todos os lugares';
  }

  createPlace(dados) {
    return dados;
  }
}
