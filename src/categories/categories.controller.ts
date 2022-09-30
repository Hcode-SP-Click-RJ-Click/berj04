import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post()
  createCategories(@Body() dados) {
    return this.categoriesService.createCategories(dados);
  }

  @Get()
  listCategories() {
    return this.categoriesService.listCategories();
  }

  @Get(':id')
  showCategories(@Param() id) {
    return this.categoriesService.showCategories(id);
  }

  @Patch(':id')
  updateCategories(@Body() dados, @Param() id) {
    return this.categoriesService.updateCategories(dados, id);
  }

  @Delete(':id')
  deleteCategories(@Param() id) {
    return this.categoriesService.deleteCategories(id);
  }
}
