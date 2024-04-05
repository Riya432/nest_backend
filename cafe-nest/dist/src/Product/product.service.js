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
exports.productService = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const product_schema_1 = require("./product.schema");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
let productService = class productService {
    constructor(productModel) {
        this.productModel = productModel;
    }
    async addNewProduct(productDto) {
        const { Name, desc, price, category } = productDto;
        await this.productModel.create({
            Name,
            desc,
            price,
            category,
        });
        return {
            statusCode: 201,
            message: 'Product Created Successfully',
        };
    }
    async getProducts(page, limit, priceFilter, productCategory) {
        let query = this.productModel.find();
        if (priceFilter && (priceFilter.minPrice || priceFilter.maxPrice)) {
            if (priceFilter.minPrice !== undefined) {
                query = query.where('price').gte(priceFilter.minPrice);
            }
            if (priceFilter.maxPrice !== undefined) {
                query = query.where('price').lte(priceFilter.maxPrice);
            }
        }
        if (productCategory) {
            query = query.where('category').equals(productCategory);
        }
        return query.find().skip((page - 1) * limit).limit(limit);
    }
    async searchProducts(query, page, limit, brand) {
        let brandfilter = this.productModel.find();
        const products = await this.productModel.find({
            productName: { $regex: new RegExp(query, 'i') }
        })
            .skip((page - 1) * limit).limit(limit);
        if (brand) {
            brandfilter = brandfilter.where('brand').equals(brand);
        }
        return products;
    }
    async deleteProduct(id) {
        await this.productModel.findByIdAndDelete(id);
        return {
            statusCode: 200,
            message: `Your product with id : "${id}" deleted successfully`,
        };
    }
    async updateProduct(id, data) {
        const updateProduct = await this.productModel.findByIdAndUpdate(id, data, {
            new: true,
        });
        return {
            statusCode: 200,
            message: 'Your Product is updated Successfully',
        };
    }
};
exports.productService = productService;
exports.productService = productService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(product_schema_1.Product.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], productService);
//# sourceMappingURL=product.service.js.map