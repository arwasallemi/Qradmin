import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProduitProvider } from '../../providers/produit/produit';
import { Printer, PrintOptions } from '@ionic-native/printer';

/**
 * Generated class for the ImageQrcodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image-qrcode',
  templateUrl: 'image-qrcode.html',
})
export class ImageQrcodePage {
  imageQrList:any=[]
  item 
  nombre: any;
  constructor(public navCtrl: NavController, public navParams: NavParams , public providerproduit : ProduitProvider,private printer: Printer) {
    
    this.item=this.navParams.get('item');
    this.nombre=this.navParams.get('nombre');
    console.log('hhhhhhhhhhh:',this.nombre);
    this.imageQrList.length=this.nombre
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageQrcodePage');
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
