import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../../cart.service';

type IconVariant = 'default' | 'warning' | 'error' | 'light' | 'inverse' | null;

@Component({
  selector: 'app-cart-icon',
  templateUrl: './cart-icon.component.html',
  styleUrls: ['./cart-icon.component.scss']
})
export class CartIconComponent implements OnInit, DoCheck {

  public variant: IconVariant = 'default';
  public count = 0;

  constructor(private cartService: CartService) {

  }

  ngOnInit(): void {
    this.count = this.getAllCartCount();
    this.checkIsEmpty();
  }

  ngDoCheck(): void {
    this.count = this.getAllCartCount();
    this.checkIsEmpty();
  }

  private checkIsEmpty(): void {
    this.variant = this.count === 0 ? 'default' : null;
  }

  private getAllCartCount(): number {
    return this.cartService.getAll.reduce((acc, curr) => {
      return acc + curr.count;
    }, 0);
  }

}
