import { Injectable } from '@angular/core';
import { Item } from './item';

import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  userCart: Item[] = []

  constructor() { }

  addToCart(item: Item): void {
    const cart = this.getCart()
    cart.push(item)
    this.updateSessionCart(cart);
  }

  removeFromCart(item: Item): void {
    this.userCart = this.userCart.filter((e) => e !== item)
    this.updateSessionCart(this.userCart);
  }

  getCart(): Item[] {
    const cart = sessionStorage.getItem('cart')
    if (cart) {
      this.userCart = (JSON.parse(cart));
    }
    return this.userCart
  }

  getTotal(): number {
    let _total: number = 0
    this.userCart.forEach(function (item) {
      _total += item.price
    })
    return _total
  }

  updateSessionCart(cart: Item[]) {
    sessionStorage.setItem('cart', JSON.stringify(cart))
  }
}
