import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PointagePage } from './pointage';

@NgModule({
  declarations: [
    PointagePage,
  ],
  imports: [
    IonicPageModule.forChild(PointagePage),
  ],
})
export class PointagePageModule {}
