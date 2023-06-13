import { Injectable } from '@angular/core';
import { Item } from './item';
import { itemList } from './mock-items';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  getItems() : Observable<Item[]>{
    const items = of(itemList)
    return items
  }
  constructor() { }
}
