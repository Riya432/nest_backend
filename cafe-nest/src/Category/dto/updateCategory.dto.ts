// DTO- data transfer objects
import { IsNotEmpty, IsString } from "class-validator";

export class updateProductCategoryDto{
    @IsString()
    @IsNotEmpty()
    title: string;
}