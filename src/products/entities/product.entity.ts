import { Field, ID, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType()
@Schema({ versionKey: 'versionProduct', timestamps: true })
export class Product extends Document {

  @Field(type => ID)
  @Prop()
  _id: Types.ObjectId;

  @Field()
  @Prop({ type: String, unique: true, required: true, min: 1, max: 30 })
  name: string;

  @Field()
  @Prop({ type: String, required: true, unique: true })
  serie: string;

  @Field()
  //Campo para almacenar el código de barras en formato EAN-13
  @Prop({ type: String, required: true, match: /^[0-9]{13}$/ })
  barcode: string;

  @Field()
  @Prop({ type: Boolean, required: true })
  status: boolean;

  @Field()
  @Prop({ type: Boolean, required: true })
  purchase_active: boolean;

  @Field()
  @Prop({ type: Boolean, required: true })
  sale_active: boolean;

  @Field( type => [String])
  @Prop({ type: [String], required: true })
  labels: string[];

  @Field()
  @Prop({ type: String, required: false })
  description: string;

  /* @Prop({ type: Types.ObjectId, ref: 'ProductType', required: true })
  product_type_id: String;

  @Prop({ type: Types.ObjectId, ref: 'Categories', required: true })
  category_id: number;

  @Prop({ type: Types.ObjectId, ref: 'Brands', required: true })
  brand_id: number; */

  @Field()
  @Prop({ type: Number, required: true, min: 0, multipleOf: 1 })
  sale_price: number;

  @Field()
  @Prop({ type: Number, required: true, min: 0, multipleOf: 1 })
  purchase_price: number;

  @Field()
  @Prop({ type: Boolean, required: false })
  is_favorite: boolean;

  @Field()
  @Prop({ required: true })
  image: string;

  @Field()
  @Prop({ type: Number, required: true, min: 0 })
  stock: number;

  @Field()
  @Prop({ type: String, required: false })
  unit_measure: String;

  @Field()
  @Prop({ type: Number, required: false, min: 0, multipleOf: 1 })
  size: number;

}

export const ProductSchema = SchemaFactory.createForClass(Product);
