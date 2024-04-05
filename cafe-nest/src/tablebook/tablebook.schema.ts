/* eslint-disable prettier/prettier */

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ValidationArguments } from "class-validator";
import { Document } from "mongoose";


@Schema()
export class tablebook extends Document{
    
    @Prop()
    firstName: string

    @Prop()
    lastName: string

    @Prop()
    username: string

    @Prop({ required: true})
    mobileNo : number

    

    @Prop({required: true, unique: true, index: true})
    email: string

    @Prop()
    gender: string
    

}

export const UserSchema = SchemaFactory.createForClass(tablebook)
