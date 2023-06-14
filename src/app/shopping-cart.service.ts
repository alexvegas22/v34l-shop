import { Injectable } from '@angular/core';
import { Item } from './item';
import { shoppingCart } from './mock-cart';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  userCart: Item[] =this.getCart()
  
  constructor() { 
    this.userCart = this.getCart()
  }
  

  addToCart(item: Item): void{
    shoppingCart.push(item)
  }

  removeFromCart(item: Item): void{
    shoppingCart.pop();
  }

  getCart() : Item[]{
    const cart = shoppingCart
    return cart
  }
  
  getTotal():number{
    let _total:number = 0
    if(shoppingCart){
    
      shoppingCart.forEach(function(item){  
        _total+=item.price
       }) 
    } return _total
  }
}
