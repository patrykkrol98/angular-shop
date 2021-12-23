import { Product } from './product';

export class CartList {
  productsList = [];

  getNbrProducts() : number {
    return this.productsList.length;
  }
}