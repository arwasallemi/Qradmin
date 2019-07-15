import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemandeCongePage } from './demande-conge';

@NgModule({
  declarations: [
    DemandeCongePage,
  ],
  imports: [
    IonicPageModule.forChild(DemandeCongePage),
  ],
})
export class DemandeCongePageModule {}
