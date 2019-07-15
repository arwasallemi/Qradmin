import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SalairePage } from './salaire';

@NgModule({
  declarations: [
    SalairePage,
  ],
  imports: [
    IonicPageModule.forChild(SalairePage),
  ],
})
export class SalairePageModule {}
