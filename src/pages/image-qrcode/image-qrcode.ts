import { Component, PACKAGE_ROOT_URL } from '@angular/core';
import { IonicPage, NavController, NavParams, Modal, ModalController, ViewController } from 'ionic-angular';
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
  nb : any
  societeprovider: any;
  list: any;
  constructor(public navCtrl: NavController, public navParams: NavParams , public providerproduit : ProduitProvider,private printer: Printer,
    private societe:SocieteProvider,private  modalCtrl : ViewController
  )
     {
    this.loadImage()
    this.item=this.navParams.get('item');
    this.nombre=this.navParams.get('nombre');
    console.log('hhhhhhhhhhh:',this.nombre);
    //this.imageQrList.length=(this.nombre)/2
// if(this.nombre < 3){
//   this.imageQrList.length=this.nombre/3
// }

if(this.nombre > 0)
{


  if(this.nombre  == 1){this.imageQrList.length=this.nombre/1
  }


if(this.nombre  == 2){this.imageQrList.length=this.nombre/2}


    if( this.nombre >= 3){
      console.log(this.nombre,"nbr superieur ou egale à 3")


      if((this.nombre % 3) ==0){
        // let nb =parseInt(this.nombre)
        console.log('nbr derivé:',this.nombre);
         this.imageQrList.length=this.nombre/3 
         console.log('nbr2:',this.nombre/3);
       //  this.imageQrList.length= this.imageQrList.length + 
         console.log('tailleeeeeeeeeeeeeee:', this.imageQrList.length);
         
       }
       if((this.nombre % 3) != 0) {
        console.log('nbr non derivé:',this.nombre);
      //  console.log('nbr mod 3:',this.nombre % 3 );
      let nbMod = this.nombre % 3 
        this.nb = this.nombre / 3
        let nbDiv =parseInt(this.nb)
        console.log(nbDiv,"nbDiv" );


         this.imageQrList.length = nbDiv +nbMod
   console.log('tailleeeeeeeeeeeeeee:', this.imageQrList.length);
       }
    }
  
}
else {
  alert('nombre invalide')
  this.modalCtrl.dismiss({
    'dismissed': true
  });

}

    
    // if((this.nombre % 3)==1)
    // { let nb =this.nombre + 1
    //   this.imageQrList.length=nb/3 
    //   console.log('taille:', this.imageQrList.length);
    // }
  
  }


  

  print(){
    this.printer.isAvailable().then(this.onSuccessLoad, this.onErrorLoad);

  }
 
  
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
