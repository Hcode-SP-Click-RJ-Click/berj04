import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoriesService {
  createCategories(dados) {
    return {
      message: 'Retornando os dados de criação',
      dados: dados,
    };
  }

  listCategories() {
    return {
      message: 'Retornando todas as categorias',
    };
  }

  showCategories(id) {
    return {
      message: 'retornando uma única categoria',
      id: id,
    };
  }

  updateCategories(dados, id) {
    return {
      message: 'Retornando a categoria atualizada',
      id: id,
      dados: dados,
    };
  }

  deleteCategories(id) {
    return {
      message: 'Excluindo uma categoria',
      id: id,
    };
  }
}
