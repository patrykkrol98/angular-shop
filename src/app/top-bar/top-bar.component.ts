import { Component, OnInit } from '@angular/core';

import { ShopService } from '../services/shop/shop.service';

import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  faShoppingCart = faShoppingCart;
  
  cartListNbr = 0;

  constructor(private shopService: ShopService) { }

  ngOnInit() {
    this.shopService.getCartListObservable()
      .subscribe(cartList => 
        this.cartListNbr = cartList.getNbrProducts());
  }
}