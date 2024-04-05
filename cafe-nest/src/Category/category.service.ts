/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { categoryDto } from './dto/category.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './category.schema';
import { Model } from 'mongoose';
import { updateProductCategoryDto } from './dto/updateCategory.dto';

@Injectable()
export class categoryService {
 
  constructor(
    @InjectModel(Category.name)
    private categorymodel: Model<Category> ,
  ) {}

  async findAll() {
    const category = await this.categorymodel.find();
    return category;
  }

  async createCategory(categoryDto: categoryDto): Promise<Category | string> {
    const { title } = categoryDto;
      const createCategory = this.categorymodel.create({
        title,
      })
      return createCategory
  }
  async updateCategory(id: string, data): Promise<object> {
    const updateProduct = await this.categorymodel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return {
      statusCode: 200,
      message: 'Your category is updated Successfully',
    };
  }

  async deleteCategory(id: string): Promise<object> {
    await this.categorymodel.findByIdAndDelete(id);
    return {
      statusCode: 200,
      message: `Your category with id : "${id}" deleted successfully`,
    };
  }



}
