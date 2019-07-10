import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Printer, PrintOptions } from '@ionic-native/printer';

/**
 * Generated class for the PrintPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-print',
  templateUrl: 'print.html',
})
export class PrintPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private printer: Printer) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrintPage');
  }
  print(){
    this.printer.isAvailable().then(this.onSuccessLoad, this.onErrorLoad);

  }

  onSuccessLoad(){
    let options: PrintOptions = {
        name: 'MyDocument',
        printerId: 'My Printer XYZ',
        duplex: true,
        landscape: true,
        grayscale: true
      };


    this.printer.print("http://google.com",options).then(this.onSuccessPrint, 
    this.onErrorPrint); 
  }

  onErrorLoad(){
    alert('Error : printing is unavailable on your device ');
  }

  onSuccessPrint(){
    alert("printing done successfully !");
  }

  onErrorPrint(){
    alert("Error while printing !");
  }

}
