import IdValidator from 'src/utils/validateId';
import CategoriesService from './category.service';
import CreateCategoryDto from './dto/createCategory.dto';
import UpdateCategoryDto from './dto/updateCategory.dto';
export default class CategoriesController {
    private readonly categoriesService;
    constructor(categoriesService: CategoriesService);
    getAllCategories(): Promise<import("./category.entity").default[]>;
    getCategoryById({ id }: IdValidator): Promise<import("./category.entity").default>;
    createCategory(category: CreateCategoryDto): Promise<import("./category.entity").default>;
    updateCategory({ id }: IdValidator, category: UpdateCategoryDto): Promise<import("./category.entity").default>;
    deleteCategory({ id }: IdValidator): Promise<void>;
}
