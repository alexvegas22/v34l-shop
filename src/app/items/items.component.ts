import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../item';
import { itemList } from '../mock-items';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {
  
  @Input() item: Item | null = null;

  items = itemList;
  
}
