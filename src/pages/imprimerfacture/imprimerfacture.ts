import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PrintOptions, Printer } from '@ionic-native/printer';
import { SocieteProvider } from '../../providers/societe/societe';

/**
 * Generated class for the ImprimerfacturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imprimerfacture',
  templateUrl: 'imprimerfacture.html',
})
export class ImprimerfacturePage {
  dataf: any;
  liste: any=[];
  ttc: any;
  imagelist: any=[];
  title: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,private printer: Printer,private societe:SocieteProvider) {
    this.dataf=this.navParams.get('dataf');
    console.log("dataf",this.dataf)
    this.liste=this.navParams.get('liste');
    console.log("liste",this.liste)
    this.ttc=this.navParams.get('ttc');
    this.title=this.navParams.get('title');
    this.loadImage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprimerfacturePage');
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
