import { Injectable } from '@angular/core';
import { Book } from './models/book';
import { books } from './models/book-mock';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  readonly books: Book[] = [];

  constructor() {
    this.books = books;
  }

  public get getAll(): Book[] {
    return this.books;
  }
}
