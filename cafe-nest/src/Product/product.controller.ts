/* eslint-disable prettier/prettier */
import { productDto } from './dto/product.dto';
import { productService } from './product.service';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UseGuards,
  Delete,
  Patch,
 
  UseInterceptors,
  UploadedFile,
  Query,
} from '@nestjs/common';
import { TokenGuard } from '../Admin/authGuard';
import { updateProductDto } from './dto/updateProduct.dto';
//import {Query as ExpressQuery} from 'express-serve-static-core';




//@UseGuards(TokenGuard)
@Controller('product')
export class productController {
  constructor(private productService: productService) {}
  @Get()
  // async findAll(@Query() query : ExpressQuery) {
  //   return this.productService.findAll(query);
  // }
  async findAll(@Query('search') searchQuery: string,
  @Query('page') page: number = 1,
   @Query('limit') limit: number = 10,
   @Query('minPrice') minPrice?: number,
   @Query('maxPrice') maxPrice?: number,
   @Query('productCategory') productCategory?: string,
   @Query('brand') brand?:string)
    
{
  const skip = (page - 1) * limit;
    if (searchQuery) {
      // If a search query is provided, use the search functionality
      return await this.productService.searchProducts(searchQuery,page, limit, brand );
    }
    else if (minPrice !== undefined || maxPrice !== undefined || productCategory || brand) {
      // If price filter is provided, use it to filter products by price range
      return await this.productService.getProducts(page, limit, { minPrice, maxPrice },productCategory);
    }
     else {
      // If no search query is provided, return all products
      return await this.productService.getProducts(page,limit);
    }
  }

  @Post('/add')
  async newProduct(@Body() productDto: productDto): Promise<object> {
    return await this.productService.addNewProduct(productDto);
  }
  

  @Delete('/:id')
  deleteProduct(@Param('id') id: string): Promise<object> {
    return this.productService.deleteProduct(id);
  }

  @Patch('/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductDto: updateProductDto,
  ): Promise<object> {
    return this.productService.updateProduct(id, updateProductDto);
  }

  


}
