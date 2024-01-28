import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './entities/product.entity';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  @Mutation(() => Product)
  async createProduct(
    @Args('createProductInput') createProductInput: CreateProductInput,
  ) : Promise<Product> {
    return this.productsService.create(createProductInput);
  }

  @Query(() => [Product], { name: 'products' })
  async findAll() : Promise<Product[]>{
    return this.productsService.findAll();
  }

  @Query(() => Product, { name: 'product' })
  async findOne(@Args('id', { type: () => String }) id: string) : Promise<Product>{
    return this.productsService.findOne(id);
  }

  @Mutation(() => Product)
  async updateProduct(
    @Args('updateProductInput') updateProductInput: UpdateProductInput,
  ) : Promise<Product>{
    return this.productsService.update(
      updateProductInput._id,
      updateProductInput,
    );
  }

  @Mutation(() => Boolean)
  async removeProduct(@Args('id', { type: () => String }) id: string) : Promise<Boolean> {
    return this.productsService.remove(id);
  }
}
