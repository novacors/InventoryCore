import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
  @Field()
  name: string;

  @Field()
  serie: string;

  @Field()
  barcode: string;

  @Field()
  status: boolean;

  @Field()
  purchase_active: boolean;

  @Field()
  sale_active: boolean;

  @Field(() => [String])
  labels: string[];

  @Field()
  description: string;

  @Field()
  sale_price: number;

  @Field()
  purchase_price: number;

  @Field()
  is_favorite: boolean;

  @Field()
  image: string;

  @Field()
  stock: number;

  @Field()
  unit_measure: String;

  @Field()
  size: number;

}
