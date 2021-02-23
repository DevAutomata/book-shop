import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../cart/cart.service';
import { BookService } from '../../book.service';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  public books: Book[];

  constructor(
    private bookService: BookService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.books = this.bookService.getAll;
  }

  public addBook(book: Book): void {
    this.cartService.addItem(book.id);
  }

}
