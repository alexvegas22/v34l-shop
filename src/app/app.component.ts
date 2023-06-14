import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreModule } from '@angular/fire/compat/firestore'
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'V34L';

  constructor() {
  }

}
