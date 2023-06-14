import { Injectable } from '@angular/core';
import { Item } from './item';
import { itemList } from './mock-items';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ 
  providedIn: 'root'
})
export class ItemService {

  getItem(id: number) : Observable<Item> {
    const item = itemList.find(item => item.id === id)!
    return of(item)
  }

  getItems() : Observable<Item[]>{
    const items = of(itemList)
    return items
  }
  constructor(
    private http: HttpClient
  ) { }
}
