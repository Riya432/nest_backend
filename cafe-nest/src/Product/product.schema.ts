// /* eslint-disable prettier/prettier */
// import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import mongoose, { Document, Types } from 'mongoose';
// import { Category } from '../Category/category.schema';


// @Schema()
// export class Product extends Document{
  
//   @Prop()
//   productName: string;

//   @Prop()
//   productDescription: string;

//   @Prop()
//   brand: string;

//   @Prop()
//   price: number;

//   // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: "Category", required: true})
//   // category: mongoose.Schema.Types.ObjectId | Category

//   @Prop({ type: String, ref: 'Category', required: true }) 
//   category: string | Category;
 
// }

// export const ProductSchema = SchemaFactory.createForClass(Product);




// product.model.ts

import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Product extends Document {
  @Prop({ required: true })
  Name: string;

  @Prop({ required: true })
  desc: string;

  @Prop({ type: [Number], required: true })
  price: number[];

  @Prop({ required: true })
  category: string;

  // @Prop({ required: true })
  // img: string;

  @Prop([{ text: { type: String, required: true }, price: { type: Number, required: true } }])
  extraOptions: { text: string; price: number }[];
}

export const ProductSchema = SchemaFactory.createForClass(Product);
