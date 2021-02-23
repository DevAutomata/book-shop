import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NglModule } from 'ng-lightning';

import { AppComponent } from './app.component';
import { CartPageComponent } from './cart/pages/cart-page.component';
import { SharedModule } from './shared/shared.module';
import { CartIconComponent } from './cart/components/cart-icon/cart-icon.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { CartListComponent } from './cart/components/cart-list/cart-list.component';
import { BookListComponent } from './book/components/book-list/book-list.component';
import { BookItemComponent } from './book/components/book-item/book-item.component';


@NgModule({
  declarations: [
    AppComponent,
    CartPageComponent,
    CartIconComponent,
    CartItemComponent,
    CartListComponent,
    BookListComponent,
    BookItemComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    NglModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
