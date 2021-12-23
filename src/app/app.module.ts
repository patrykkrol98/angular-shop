import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';

import { ProductListComponent } from './product-list/product-list.component';

import { ProductDetailsComponent } from './product-details/product-details.component';

import { CartComponent } from './cart/cart.component';

import { ShopService } from './services/shop/shop.service';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { 
        path: '', 
        component: ProductListComponent
      },
      { 
        path: 'product/:id', 
        component: ProductDetailsComponent 
      },
      { 
        path: 'cart', 
        component: CartComponent 
      },
    ]),
    FontAwesomeModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductDetailsComponent,
    CartComponent,
    CarouselComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ ShopService ]
})
export class AppModule { }