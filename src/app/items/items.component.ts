import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  
  @Input() item: Item | null = null;

  items : Item[]= [];

  constructor(private itemService: ItemService){
    
  }
  ngOnInit():void{
    this.getItems()
  }
  getItems(): void {
    this.itemService.getItems()
    .subscribe(items=> this.items = items)
  }
}
