import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  createCategory(dados) {
    return this.prismaService.categories.create({
      data: {
        name: dados.name,
      },
    });
  }

  listCategories() {
    return this.prismaService.categories.findMany();
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
