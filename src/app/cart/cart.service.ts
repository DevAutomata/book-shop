import { Injectable } from '@angular/core';
import { CartItem } from './models/cart-item';

@Injectable({
  providedIn: 'root',
})
export class CartService {

  private purchases: CartItem[] = [];

  public get getAll(): CartItem[] {
    return this.purchases;
  }

  public addItem(id: number): void {
    const isItemInCart = this.findItem(id);

    if (Boolean(isItemInCart)) {
      this.increaseItemCount(id);
    } else {
      this.purchases.push({ id, count: 1 });
    }
  }

  public deleteItem(id: number): void {
    const index = this.purchases.findIndex((item) => item.id === id);
    this.purchases.splice(index, 1);
  }

  public increaseItemCount(id: number): void {
    this.findItem(id).count += 1;
  }

  public decreaseItemCount(id: number): void {
    const item = this.findItem(id);

    if (item.count === 0) {
      return;
    }

    item.count -= 1;
  }

  private findItem(id: number): CartItem {
    return this.purchases.find(((item) => item.id === id));
  }

}
