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
import { CreateCategoriesDTO } from './dto/create-categories.dto';
import { CreateManyCategoriesDTO } from './dto/createMany-categories.dto';
import { UpdateCategoriesDTO } from './dto/update-categories.dto';

@Controller('categories')
export class CategoriesController {
  constructor(private categoriesService: CategoriesService) {}

  @Post('/create-categories')
  createCategories(@Body() categories: CreateManyCategoriesDTO) {
    return this.categoriesService.createCategories(categories);
  }

  @Post()
  createCategory(@Body() categories: CreateCategoriesDTO) {
    return this.categoriesService.createCategory(categories);
  }

  @Get()
  listCategories() {
    return this.categoriesService.listCategories();
  }

  @Get(':id')
  showCategories(@Param('id') id) {
    return this.categoriesService.showCategories(+id);
  }

  @Patch(':id')
  updateCategories(@Body() categories: UpdateCategoriesDTO, @Param('id') id) {
    return this.categoriesService.updateCategories(categories, +id);
  }

  @Delete(':id')
  deleteCategories(@Param('id') id) {
    return this.categoriesService.deleteCategories(+id);
  }
}
