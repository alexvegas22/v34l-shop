import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { ItemService } from '../item.service';
import { Item } from '../item';
import { ShoppingCartService } from '../shopping-cart.service';


@Component({
  selector: 'app-item-page',
  templateUrl: './item-page.component.html',
  styleUrls: ['./item-page.component.css']
})

export class ItemPageComponent implements OnInit{
  
addToCart(item : Item):void {
 this.cartService.addToCart(item)
}

  item: Item | undefined;

  constructor(
    private cartService:ShoppingCartService,
    private route: ActivatedRoute,
    private itemService: ItemService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getItem();
  }
  
  getItem():void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.itemService.getItem(id)
      .subscribe(item => this.item = item)
  }

  return(): void {
    this.location.back();
  }
}
