import CreateCategoryDto from './dto/createCategory.dto';
import Category from './category.entity';
import UpdateCategoryDto from './dto/updateCategory.dto';
import { Repository } from 'typeorm';
export default class CategoriesService {
    private categoriesRepository;
    constructor(categoriesRepository: Repository<Category>);
    getAllCategories(): Promise<Category[]>;
    getCategoryById(id: number): Promise<Category>;
    createCategory(category: CreateCategoryDto): Promise<Category>;
    updateCategory(id: number, category: UpdateCategoryDto): Promise<Category>;
    deleteCategory(id: number): Promise<void>;
}
