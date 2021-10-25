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
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const category_entity_1 = require("../category/category.entity");
const user_entity_1 = require("../users/user.entity");
let Recipe = class Recipe {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Recipe.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "title", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "ingredients", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Recipe.prototype, "steps", void 0);
__decorate([
    typeorm_1.ManyToMany(() => category_entity_1.default, (category) => category.recipes),
    typeorm_1.JoinTable(),
    __metadata("design:type", String)
], Recipe.prototype, "categories", void 0);
__decorate([
    typeorm_1.ManyToOne(() => user_entity_1.default, (author) => author.recipes),
    __metadata("design:type", user_entity_1.default)
], Recipe.prototype, "author", void 0);
Recipe = __decorate([
    typeorm_1.Entity()
], Recipe);
exports.default = Recipe;
//# sourceMappingURL=recipe.entity.js.map