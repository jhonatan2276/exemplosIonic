import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(private route: Router) {}

  goToTurmaPage() {
    // this.route.navigate(['turma']);
    this.route.navigateByUrl('turma');
  }

}
