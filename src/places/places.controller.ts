import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlacesService } from './places.service';

@Controller('places')
export class PlacesController {
  constructor(private placesService: PlacesService) {}

  // localhost:3000/places
  @Get()
  listPlaces() {
    return this.placesService.listPlaces();
  }
  // localhost:3000/places
  @Post()
  createPlace(@Body() dados) {
    return this.placesService.createPlace(dados);
  }
  // localhost:3000/places/id
  // DESAFIO: CONECTAR ESSE PACTH COM O PLACES SERVICE
  @Patch(':id')
  updatePlace(@Body() dados, @Param('id') id) {
    return {
      message: `Lugar número ${id} atualizado com sucesso!`,
      lugar: dados,
    };
  }

  // DESAFIO: CONECTAR ESSE DELETE COM O PLACES SERVICE
  @Delete(':id')
  deletePlace(@Param('id') id) {
    return `Lugar número ${id} atualizado com sucesso!`;
  }
}