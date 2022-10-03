import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CreatePlaceDTO } from './dto/create-pleace.dto';
import { UpdatePlacesDTO } from './dto/update-pleaces.dto';
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
  createPlace(@Body() dados: CreatePlaceDTO) {
    return this.placesService.createPlace(dados);
  }

  @Get(':id')
  showPlace(@Param('id') id) {
    return this.placesService.showPlace(+id);
  }

  // localhost:3000/places/id
  // DESAFIO: CONECTAR ESSE PACTH COM O PLACES SERVICE
  @Patch(':id')
  updatePlace(@Body() dados: UpdatePlacesDTO, @Param('id') id) {
    return this.placesService.updatePlace(dados, +id);
  }

  // DESAFIO: CONECTAR ESSE DELETE COM O PLACES SERVICE
  @Delete(':id')
  deletePlace(@Param('id') id) {
    return this.placesService.deletePlace(+id);
  }
}
