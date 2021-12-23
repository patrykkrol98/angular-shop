import { Product } from '../../../models/shop/product';

let product1 = new Product();
product1.id = 1;
product1.name = 'Phone XL';
product1.price = 799;
product1.description = 'A large phone with one of the best screens';

let product2 = new Product();
product2.id = 2;
product2.name = 'Phone Mini';
product2.price = 699;
product2.description = 'A great phone with one of the best cameras';

let product3 = new Product();
product3.id = 3;
product3.name = 'Phone Standard';
product3.price = 299;
product3.description = '';

export const mockProducts = [
  product1,
  product2,
  product3
];