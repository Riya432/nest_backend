/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Category extends Document{

  @Prop()
  title: string;

}

export const CategorySchema = SchemaFactory.createForClass(Category);

