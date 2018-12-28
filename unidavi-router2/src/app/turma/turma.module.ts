import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TurmaPage } from './turma.page';
import { Profile2Component } from './profile2/profile2.component';

const routes: Routes = [
  {
    path: '',
    component: TurmaPage
  },
  {
    path: ':id',
    component: Profile2Component
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TurmaPage, Profile2Component]
})
export class TurmaPageModule {}
