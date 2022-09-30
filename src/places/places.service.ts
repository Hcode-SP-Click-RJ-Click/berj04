import { Injectable } from '@nestjs/common';

@Injectable()
export class PlacesService {
  listPlaces() {
    return 'Aqui estão todos os lugares';
  }

  createPlace(dados) {
    return dados;
  }

  showPlace(id) {
    return {
      message: 'Retornando o lugar pelo id',
      id: id,
    };
  }

  updatePlace(dados, id) {
    return {
      id: id,
      dados: dados,
      message: 'Aqui os dados atualizados',
    };
  }

  deletePlace(id) {
    return `Aqui o id do place excluido com o id ${id}`;
  }
}
