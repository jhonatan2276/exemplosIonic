import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardPageModule' }
]

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class MemberRoutingModule { }
