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
exports.categoryController = void 0;
const common_1 = require("@nestjs/common");
const category_dto_1 = require("./dto/category.dto");
const category_service_1 = require("./category.service");
const updateCategory_dto_1 = require("./dto/updateCategory.dto");
let categoryController = class categoryController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    findAll() {
        return this.categoryService.findAll();
    }
    createProductCategory(categoryDto) {
        return this.categoryService.createCategory(categoryDto);
    }
    updateProduct(id, updateProductCategoryDto) {
        return this.categoryService.updateCategory(id, updateProductCategoryDto);
    }
    deleteProduct(id) {
        return this.categoryService.deleteCategory(id);
    }
};
exports.categoryController = categoryController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], categoryController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [category_dto_1.categoryDto]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "createProductCategory", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateCategory_dto_1.updateProductCategoryDto]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], categoryController.prototype, "deleteProduct", null);
exports.categoryController = categoryController = __decorate([
    (0, common_1.Controller)('/category'),
    __metadata("design:paramtypes", [category_service_1.categoryService])
], categoryController);
//# sourceMappingURL=category.controller.js.map