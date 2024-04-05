/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Param, Get,Post, UseGuards, Patch } from '@nestjs/common';
import { categoryDto } from './dto/category.dto';
import { categoryService } from './category.service';
import { Category } from './category.schema';
import { TokenGuard } from 'src/Admin/authGuard';
import { updateProductCategoryDto } from './dto/updateCategory.dto';

@Controller('/category')
//@UseGuards(TokenGuard)
export class categoryController {
  constructor(private categoryService: categoryService) {}
  @Get()
  findAll() {
    return this.categoryService.findAll();
  }
  @Post('/add')
 createProductCategory(@Body() categoryDto: categoryDto): Promise<Category | string> {
    return this.categoryService.createCategory(categoryDto)
  }
  
  @Patch('/:id')
  updateProduct(
    @Param('id') id: string,
    @Body() updateProductCategoryDto: updateProductCategoryDto,
  ): Promise<object> {
    return this.categoryService.updateCategory(id, updateProductCategoryDto);
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: string): Promise<object> {
    return this.categoryService.deleteCategory(id);
  }
}