import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  title = 'Home Title';

  constructor() {
    console.log('constructor');
    console.log(this.title);
  }
}
