import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImprimerBonSortiePage } from './imprimer-bon-sortie';

@NgModule({
  declarations: [
    ImprimerBonSortiePage,
  ],
  imports: [
    IonicPageModule.forChild(ImprimerBonSortiePage),
  ],
})
export class ImprimerBonSortiePageModule {}
