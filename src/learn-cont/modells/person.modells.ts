import { Schema, Prop,SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Person } from '../interfeces/person.interface';

export type UserDocument = Person & Document;

@Schema()
export class PersonModell {
  
    @Prop({ required: true })
    name: string;
  
    @Prop({ required: true })
    age: number;
  
    @Prop({ required: true, unique: true })
    pId: string;
  
  }
  
  export const PersonSchema = SchemaFactory.createForClass(PersonModell);
  
 

