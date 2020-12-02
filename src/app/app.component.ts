import { Component } from '@angular/core';

import { data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items: { group: string, children: { name: string, value: number }[] }[] = data;

  constructor() {
    console.log(this.items);
  }
}
