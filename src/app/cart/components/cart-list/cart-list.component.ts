import { Component, DoCheck, OnInit } from '@angular/core';
import { BookService } from '../../../book/book.service';
import { Book } from '../../../book/models/book';
import { books } from '../../../book/models/book-mock';
import { CartService } from '../../cart.service';
import { CartBook } from '../../models/cart-book';
import { CartItem } from '../../models/cart-item';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.scss']
})
export class CartListComponent implements OnInit, DoCheck {

  public purchasesItems: CartItem[] = [];
  public purchases: CartBook[] = [];
  private allBooks: Book[] = [];

  constructor(
    private cartService: CartService,
    private bookService: BookService,
  ) {
  }

  ngOnInit(): void {
    this.purchasesItems = this.cartService.getAll;
    this.allBooks = this.bookService.getAll;
    this.setPurchases();
  }

  ngDoCheck(): void {
    this.setPurchases();
  }

  public increase(item: CartBook): void {
    this.cartService.increaseItemCount(item.id);
  }

  public decrease(item: CartBook): void {
    this.cartService.decreaseItemCount(item.id);
  }

  public remove(item: CartBook): void {
    this.cartService.deleteItem(item.id);
  }

  // TODO: Add normal merge
  private findBooks(allBooks: Book[], purchasesItems: CartItem[]): CartBook[] {
    const ids = purchasesItems.map((item) => item.id);

    return allBooks.map((book) => {
      if (ids.includes(book.id)) {
        return {
          ...book,
          count: purchasesItems.find((item) => item.id === book.id).count,
        };
      }
    }).filter(Boolean);
  }

  private setPurchases(): void {
    this.purchases = this.findBooks(this.allBooks, this.purchasesItems);
  }
}
