/* eslint-disable prettier/prettier */
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.schema';
import { productDto } from './dto/product.dto';
import mongoose, { Model } from 'mongoose';
import { Body, Injectable } from '@nestjs/common';
//import {Query} from 'express-serve-static-core';
import { filter } from 'rxjs';
import { Category } from 'src/Category/category.schema';
@Injectable()
export class productService {
  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
  ) {}

  async addNewProduct(productDto: productDto): Promise<object> {
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

  async getProducts(page: number, limit: number,priceFilter?: { minPrice?: number, maxPrice?: number }, productCategory?: string): Promise<Product[]> {
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

    // if(brand){
    //   query= query.where('brand').equals(brand);
    // }

    return query.find().skip((page-1)*limit).limit(limit);
   
  }

  async searchProducts(query: string,  page: number, limit: number, brand:string): Promise<Product[]> {
    // Perform a case-insensitive partial match on productName 
    let brandfilter = this.productModel.find(); 
    const products = await this.productModel.find({
      productName: { $regex: new RegExp(query, 'i') }
    })
    .skip((page-1)*limit).limit(limit);

    
    if(brand){
      brandfilter= brandfilter.where('brand').equals(brand);
    }
    return products;
  }
  async deleteProduct(id: string): Promise<object> {
    await this.productModel.findByIdAndDelete(id);
    return {
      statusCode: 200,
      message: `Your product with id : "${id}" deleted successfully`,
    };
  }

  async updateProduct(id: string, data): Promise<object> {
    const updateProduct = await this.productModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return {
      statusCode: 200,
      message: 'Your Product is updated Successfully',
    };
  }
  
  // async uploadingFiles(file: Express.Multer.File): Promise<any> {
  //   console.log(file)
  // }
  
}
