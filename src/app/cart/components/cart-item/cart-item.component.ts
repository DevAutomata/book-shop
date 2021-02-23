import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartBook } from '../../models/cart-book';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {
  @Input() item: CartBook;
  @Input() idx: number;

  @Output() increase = new EventEmitter<CartBook>();
  @Output() decrease = new EventEmitter<CartBook>();
  @Output() remove = new EventEmitter<CartBook>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.item);
  }

  public increaseItem(): void {
    this.increase.emit(this.item);
  }

  public decreaseItem(): void {
    this.decrease.emit(this.item);
  }

  public removeItem(): void {
    this.remove.emit(this.item);
  }

}
