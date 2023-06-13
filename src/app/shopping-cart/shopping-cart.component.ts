import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  constructor( private location: Location){}
return(): void {
    this.location.back();
  }
}
