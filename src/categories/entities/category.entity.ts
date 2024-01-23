import { Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

interface Image {
  path: string;
  name: string;
}

@Schema({ versionKey: true, timestamps: true })
export class Category extends Document {
  name: string;
  image: Image;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
