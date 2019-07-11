import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProduitProvider } from '../../providers/produit/produit';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { SocieteProvider } from '../../providers/societe/societe';

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
  imagelist
  nombre: any;
  societeprovider: any;
  list: any;
  constructor(public navCtrl: NavController, public navParams: NavParams , public providerproduit : ProduitProvider,private printer: Printer,
    private societe:SocieteProvider) {
    this.loadImage()
    this.item=this.navParams.get('item');
    this.nombre=this.navParams.get('nombre');
    console.log('hhhhhhhhhhh:',this.nombre);
    //this.imageQrList.length=(this.nombre)/2
    if((parseInt(this.nombre) % 2)==0){
      //let nb =parseInt(this.nombre)
      this.imageQrList.length=parseInt(this.nombre)/2
      console.log('taille:', this.imageQrList.length);
    }
    
    if((parseInt(this.nombre) % 2)==1)
    { let nb =parseInt(this.nombre) + 1
      this.imageQrList.length=(nb)/4
      console.log('taille:', this.imageQrList.length);
    }
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImageQrcodePage');
  }

  print(){
    this.printer.isAvailable().then(this.onSuccessLoad, this.onErrorLoad);

  }
  // get(){
  //   this.societe.get()
  //   .then(data => {
  //     this.list = data;
  
  //  this.image=this.list[0].alt;
  //  console.log("image:::::",this.image);
 
  //   });
  
  // }
  
  loadImage(){

    this.societe.loadimageSociete()
    .then(data => {
      this.imagelist = data;
      console.log(this.imagelist)
  
  
    });
  
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
