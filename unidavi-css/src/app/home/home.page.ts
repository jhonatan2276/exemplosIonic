import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  colorChange() {
    document.querySelector('html').style.setProperty('--ion-color-primary', 'green');
  }

}
