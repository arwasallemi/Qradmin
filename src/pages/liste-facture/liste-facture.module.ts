import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ListeFacturePage } from './liste-facture';

@NgModule({
  declarations: [
    ListeFacturePage,
  ],
  imports: [
    IonicPageModule.forChild(ListeFacturePage),
  ],
})
export class ListeFacturePageModule {}
