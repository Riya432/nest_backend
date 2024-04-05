import { productDto } from './dto/product.dto';
import { productService } from './product.service';
import { updateProductDto } from './dto/updateProduct.dto';
export declare class productController {
    private productService;
    constructor(productService: productService);
    findAll(searchQuery: string, page?: number, limit?: number, minPrice?: number, maxPrice?: number, productCategory?: string, brand?: string): Promise<import("./product.schema").Product[]>;
    newProduct(productDto: productDto): Promise<object>;
    deleteProduct(id: string): Promise<object>;
    updateProduct(id: string, updateProductDto: updateProductDto): Promise<object>;
}
