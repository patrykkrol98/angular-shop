import { Component, OnInit } from '@angular/core';

import { Product } from '../models/shop/product';
import { ShopService } from '../services/shop/shop.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];

  constructor(private shopService: ShopService) { }

  ngOnInit() {
     this.shopService.getProducts()
      .subscribe(products => 
        this.products = products);
  }

  addToCart(product: Product): void {
    this.shopService.addCartItem(product);
  }
}