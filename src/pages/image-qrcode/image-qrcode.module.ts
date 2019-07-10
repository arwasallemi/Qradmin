import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ImageQrcodePage } from './image-qrcode';

@NgModule({
  declarations: [
    ImageQrcodePage,
  ],
  imports: [
    IonicPageModule.forChild(ImageQrcodePage),
  ],
})
export class ImageQrcodePageModule {}
