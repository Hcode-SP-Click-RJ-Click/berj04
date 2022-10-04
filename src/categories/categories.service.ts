import { Injectable } from '@nestjs/common';
import { Console } from 'console';
import { PrismaService } from '../prisma.service';
import { CreateCategoriesDTO } from './dto/create-categories.dto';
import { CreateManyCategoriesDTO } from './dto/createMany-categories.dto';

@Injectable()
export class CategoriesService {
  constructor(private prismaService: PrismaService) {}

  createCategories(createManyCategoriesDTO: CreateManyCategoriesDTO) {
    return this.prismaService.categories.createMany({
      data: createManyCategoriesDTO.names,
      skipDuplicates: true,
    });
  }

  createCategory(categories: CreateCategoriesDTO) {
    return this.prismaService.categories.create({
      data: {
        name: categories.name,
      },
    });
  }

  listCategories() {
    return this.prismaService.categories.findMany({
      include: {
        places: true,
      },
    });
  }

  showCategories(id) {
    return this.prismaService.categories.findUnique({
      where: {
        id: id,
      },

      include: {
        places: true,
      },
    });
  }

  updateCategories(categories, id) {
    return this.prismaService.categories.update({
      where: {
        id: id,
      },

      data: {
        name: categories.name,
      },
    });
  }

  deleteCategories(id) {
    return this.prismaService.categories.delete({
      where: {
        id: id,
      },
    });
  }
}
