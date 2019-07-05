import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import JsBarcode from 'jsbarcode';
/**
 * Generated class for the BarcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-barcode',
  templateUrl: 'barcode.html',
})
export class BarcodePage {
code:any;
a:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
  textToBase64Barcode(text){
    text = "11220";
    JsBarcode(this.code, text, {format: "CODE39"});
    return this.code.toDataURL("image/png");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BarcodePage');
  }

}
