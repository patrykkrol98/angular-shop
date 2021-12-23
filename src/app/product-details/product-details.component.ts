import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';

import { Product } from '../models/shop/product';
import { ShopService } from '../services/shop/shop.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html'
})
export class ProductDetailsComponent implements OnInit {
  product$: Observable<Product>;

  constructor(
    private shopService: ShopService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.product$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.shopService.getProductById(Number(params.get('id'))))
    );
  }

}