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
exports.productController = void 0;
const product_dto_1 = require("./dto/product.dto");
const product_service_1 = require("./product.service");
const common_1 = require("@nestjs/common");
const updateProduct_dto_1 = require("./dto/updateProduct.dto");
let productController = class productController {
    constructor(productService) {
        this.productService = productService;
    }
    async findAll(searchQuery, page = 1, limit = 10, minPrice, maxPrice, productCategory, brand) {
        const skip = (page - 1) * limit;
        if (searchQuery) {
            return await this.productService.searchProducts(searchQuery, page, limit, brand);
        }
        else if (minPrice !== undefined || maxPrice !== undefined || productCategory || brand) {
            return await this.productService.getProducts(page, limit, { minPrice, maxPrice }, productCategory);
        }
        else {
            return await this.productService.getProducts(page, limit);
        }
    }
    async newProduct(productDto) {
        return await this.productService.addNewProduct(productDto);
    }
    deleteProduct(id) {
        return this.productService.deleteProduct(id);
    }
    updateProduct(id, updateProductDto) {
        return this.productService.updateProduct(id, updateProductDto);
    }
};
exports.productController = productController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('search')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('minPrice')),
    __param(4, (0, common_1.Query)('maxPrice')),
    __param(5, (0, common_1.Query)('productCategory')),
    __param(6, (0, common_1.Query)('brand')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, Number, Number, Number, String, String]),
    __metadata("design:returntype", Promise)
], productController.prototype, "findAll", null);
__decorate([
    (0, common_1.Post)('/add'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [product_dto_1.productDto]),
    __metadata("design:returntype", Promise)
], productController.prototype, "newProduct", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], productController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateProduct_dto_1.updateProductDto]),
    __metadata("design:returntype", Promise)
], productController.prototype, "updateProduct", null);
exports.productController = productController = __decorate([
    (0, common_1.Controller)('product'),
    __metadata("design:paramtypes", [product_service_1.productService])
], productController);
//# sourceMappingURL=product.controller.js.map