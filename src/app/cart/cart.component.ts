import { Component, OnInit } from '@angular/core';

import { ShopService } from '../services/shop/shop.service';

import { CartList } from '../models/shop/cartList';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  
  cartList$: CartList;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.cartList$ = this.shopService.getCartList();
    this.shopService.getCartListObservable().subscribe(cartList =>
      this.cartList$ = cartList);
  }
}