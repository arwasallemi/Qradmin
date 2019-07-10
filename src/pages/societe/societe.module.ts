import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocietePage } from './societe';

@NgModule({
  declarations: [
    SocietePage,
  ],
  imports: [
    IonicPageModule.forChild(SocietePage),
  ],
})
export class SocietePageModule {}
