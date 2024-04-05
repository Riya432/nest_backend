/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsEmpty } from 'class-validator';

export class updateProductDto {
  @IsString()
  @IsNotEmpty()
  title?: string

  @IsString()
 @IsNotEmpty()
  category?: string

 @IsString()
@IsNotEmpty()
  prices?: string

  @IsNotEmpty()
  img: string;
}
