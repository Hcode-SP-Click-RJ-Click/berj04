import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateManyPlacesDTO } from './dto/createMany-pleaces.dto';

@Injectable()
export class PlacesService {
  constructor(private prismaService: PrismaService) {}

  listPlaces() {
    return this.prismaService.places.findMany();
  }

  createPlaces(createManyPlacesDTO: CreateManyPlacesDTO) {
    return this.prismaService.places.createMany({
      data: createManyPlacesDTO.names,
      skipDuplicates: true,
    });
  }

  createPlace(places) {
    const place = this.prismaService.places.create({
      data: {
        name: places.name,
        categoryId: places.categoryId,
      },
    });

    return place;
  }

  showPlace(id) {
    return this.prismaService.places.findUnique({
      where: {
        id: id,
      },
    });
  }

  updatePlace(dados, id) {
    return this.prismaService.places.update({
      where: {
        id: id,
      },

      data: {
        name: dados.name,
      },
    });
  }

  deletePlace(id) {
    return this.prismaService.places.delete({
      where: {
        id: id,
      },
    });
  }
}
