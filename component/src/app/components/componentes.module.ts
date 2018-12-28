import { SemdButtonComponent } from './semd-button/semd-button.component'
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    SemdButtonComponent
  ],
  exports: [
    SemdButtonComponent
  ],
  imports: [
    IonicModule
  ]
})
export class ComponentsModule {}
