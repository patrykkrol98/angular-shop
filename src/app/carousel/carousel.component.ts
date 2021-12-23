import { Component, OnInit } from '@angular/core';
import { Product } from '../models/shop/product';
import { ShopService } from '../services/shop/shop.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  products: Product[];
  carouselProducts: Product[];
  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts()
      .subscribe(products =>
        this.products = products);
    this.carouselProducts = this.products.sort(() => Math.random() - Math.random()).slice(0, 3);
  }

  addToCart(product: Product): void {
    this.shopService.addCartItem(product);
  }

}
