import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import CreateCategoryDto from './dto/createCategory.dto';
import Category from './category.entity';
import UpdateCategoryDto from './dto/updateCategory.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export default class CategoriesService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>
  ) {}

  getAllCategories() {
    return this.categoriesRepository.find();
  }

  async getCategoryById(id: number) {
    const category = await this.categoriesRepository.findOne(id, { relations: ['recipes'] });
    if (category) {
      return category;
    }
    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
  }

  async createCategory(category: CreateCategoryDto) {
    const newCategory = await this.categoriesRepository.create(category);
    await this.categoriesRepository.save(newCategory);
    return newCategory;
  }

  async updateCategory(id: number, category: UpdateCategoryDto) {
    await this.categoriesRepository.update(id, category);
    const updatedCategory = await this.categoriesRepository.findOne(id, { relations: ['recipes'] });
    if (updatedCategory) {
      return updatedCategory
    }
    throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
  }

  async deleteCategory(id: number) {
    const deleteResponse = await this.categoriesRepository.delete(id);
    if (!deleteResponse.affected) {
        throw new HttpException('Category not found', HttpStatus.NOT_FOUND);
    }
  }
}