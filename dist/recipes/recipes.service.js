"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const recipe_entity_1 = require("./recipe.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../users/user.entity");
let RecipesService = class RecipesService {
    constructor(recipesRepository) {
        this.recipesRepository = recipesRepository;
    }
    getAllRecipes() {
        const recipes = this.recipesRepository.find({ relations: ['author', 'categories'] });
        return recipes;
    }
    async getRecipeById(id) {
        const recipe = await this.recipesRepository.findOne(id);
        if (recipe) {
            return recipe;
        }
        throw new common_1.HttpException('Recipe not found', common_1.HttpStatus.NOT_FOUND);
    }
    async createRecipe(recipe, userId) {
        const newRecipe = await this.recipesRepository.create(Object.assign(Object.assign({}, recipe), { author: userId }));
        await this.recipesRepository.save(newRecipe);
        return newRecipe;
    }
    async updateRecipe(id, recipe) {
        await this.recipesRepository.update(id, recipe);
        const updatedRecipe = await this.recipesRepository.findOne(id);
        if (updatedRecipe) {
            return updatedRecipe;
        }
        throw new common_1.HttpException('Recipe not found', common_1.HttpStatus.NOT_FOUND);
    }
    async deleteRecipe(id) {
        const deleteResponse = await this.recipesRepository.delete(id);
        if (!deleteResponse.affected) {
            throw new common_1.HttpException('Recipe not found', common_1.HttpStatus.NOT_FOUND);
        }
    }
};
RecipesService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(recipe_entity_1.default)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], RecipesService);
exports.default = RecipesService;
//# sourceMappingURL=recipes.service.js.map