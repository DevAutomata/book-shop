import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent implements OnInit {

  @Input() book: Book;

  @Output() add = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  public addBook(): void {
    this.add.emit(this.book);
  }

}
