import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema( { versionKey: true, timestamps: true })
export class Product extends Document{

  @Prop({ type: String, unique: true, required: true, min: 1, max: 30 })
  name: string;

  @Prop({ type: String, required: true, unique: true })
  serie: string;

  //Campo para almacenar el código de barras en formato EAN-13
  @Prop({ type: String, required: true, match: /^[0-9]{13}$/ })
  barcode: string;

  @Prop({ type: Boolean, required: true })
  status: boolean;

  @Prop({ type: Boolean, required: true })
  purchase_active: boolean;

  @Prop({ type: Boolean, required: true })
  sale_active: boolean;

  @Prop({ type: [String], required: true })
  labels: string[];

  @Prop({ type: String, required: false })
  description: string;

  /* @Prop({ type: Types.ObjectId, ref: 'ProductType', required: true })
  product_type_id: String;

  @Prop({ type: Types.ObjectId, ref: 'Categories', required: true })
  category_id: number;

  @Prop({ type: Types.ObjectId, ref: 'Brands', required: true })
  brand_id: number; */

  @Prop({ type: Number, required: true, min: 0, multipleOf: 1 })
  sale_price: number;

  @Prop({ type: Number, required: true, min: 0, multipleOf: 1})
  purchase_price: number;

  @Prop({ type: Boolean, required: false })
  is_favorite: boolean;

  @Prop({ type: Buffer, required: true })
  image: Buffer;

  @Prop({ type: Number, required: true, min: 0 })
  stock: number;

  @Prop({ type: String, required: false })
  unit_measure: String;

  @Prop({ type: Number, required: false, min: 0, multipleOf: 1})
  size: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);