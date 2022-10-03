import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PlacesService {
  constructor(private prismaService: PrismaService) {}

  listPlaces() {
    return this.prismaService.places.findMany();
  }

  createPlace(dados) {
    const place = this.prismaService.places.create({
      data: {
        name: dados.name,
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
