import { Category } from 'src/Category/category.schema';
export declare class productDto {
    Name: string;
    desc: string;
    price: number;
    category: string | Category;
}
