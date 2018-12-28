import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  clickDaPagina() {
    console.log('click da pagina');
  }

  acaoDaHome() {
    console.log('acao da home');
  }
}
