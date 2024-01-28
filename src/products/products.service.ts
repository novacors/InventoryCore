import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<Product>,
  ) {}

  async create(createProductInput: CreateProductInput): Promise<Product>{
    try {
      const data = new this.productModel(createProductInput);
      const saveProduct = await data.save();

      return saveProduct;
    } catch (error) {
      console.error('createProduct error:',error);

      throw error;
    }
  }

  async findAll() {
    try {
      const data = await this.productModel.find();

      return data;

    } catch (error) {
      console.error('findAll error:', error);

      throw error;
    }
  }

  async findOne(id: string) {
    try {
      const _id = new Types.ObjectId(id);
      const data = await this.productModel.findById(_id);

      if(!data){
        throw new Error("Product not found");
      }
      return data;
      
    } catch (error) {
      console.error('findOne error:', error);

      throw error;
    }
  }

  async update(id: string, updateProductInput: UpdateProductInput){
    try {
      const filter = { _id: new Types.ObjectId(id) };
      const { _id, ...updateData } = updateProductInput;
      const data = await this.productModel.findOneAndUpdate(filter, updateData, { new: true });
      
      if (!data) {
        throw new Error(`No product found with id: ${id}`);
      }
      
      return data;

    } catch (error) {
      console.error('update error:', error);

      throw error;
    }
  }

  async remove(id: string){
    try {
      const _id = new Types.ObjectId(id);
      const data = await this.productModel.deleteOne(_id);
  
      if (data.deletedCount === 0) {
        throw new Error(`No product found with id: ${id}`);
      }

      return true;

    } catch (error) {
      console.error('remove error:', error);

      throw error;
    }
}
  
}
