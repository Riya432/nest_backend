/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Product } from './product.schema';
import { productDto } from './dto/product.dto';
import { Model } from 'mongoose';
export declare class productService {
    private readonly productModel;
    constructor(productModel: Model<Product>);
    addNewProduct(productDto: productDto): Promise<object>;
    getProducts(page: number, limit: number, priceFilter?: {
        minPrice?: number;
        maxPrice?: number;
    }, productCategory?: string): Promise<Product[]>;
    searchProducts(query: string, page: number, limit: number, brand: string): Promise<Product[]>;
    deleteProduct(id: string): Promise<object>;
    updateProduct(id: string, data: any): Promise<object>;
}
