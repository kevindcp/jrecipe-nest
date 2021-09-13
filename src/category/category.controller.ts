import {Body, Controller, Delete, Get, Param, Patch, Post} from '@nestjs/common';
import IdValidator from 'src/utils/validateId';
  import CategoriesService from './category.service';
  import CreateCategoryDto from './dto/createCategory.dto';
  import UpdateCategoryDto from './dto/updateCategory.dto';
  
  @Controller('categories')
  export default class CategoriesController {
    constructor(
      private readonly categoriesService: CategoriesService
    ) {}
  
    @Get()
    getAllCategories() {
      return this.categoriesService.getAllCategories();
    }
  
    @Get(':id')
    getCategoryById(@Param() { id }: IdValidator) {
      return this.categoriesService.getCategoryById(Number(id));
    }
  
    @Post()
    async createCategory(@Body() category: CreateCategoryDto) {
      return this.categoriesService.createCategory(category);
    }
  
    @Patch(':id')
    async updateCategory(@Param() { id }: IdValidator, @Body() category: UpdateCategoryDto) {
      return this.categoriesService.updateCategory(Number(id), category);
    }
  
    @Delete(':id')
    async deleteCategory(@Param() { id }: IdValidator) {
      return this.categoriesService.deleteCategory(Number(id));
    }
  }