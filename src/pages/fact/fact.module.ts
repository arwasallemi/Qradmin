import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FactPage } from './fact';

@NgModule({
  declarations: [
    FactPage,
  ],
  imports: [
    IonicPageModule.forChild(FactPage),
  ],
})
export class FactPageModule {}
