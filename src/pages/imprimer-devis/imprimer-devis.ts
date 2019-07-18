import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Printer, PrintOptions } from '@ionic-native/printer';
import { SocieteProvider } from '../../providers/societe/societe';

/**
 * Generated class for the ImprimerDevisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imprimer-devis',
  templateUrl: 'imprimer-devis.html',
})
export class ImprimerDevisPage {
  dataDevis: any;
  liste: any=[];
  ttc: any;
  prixfinal: any;
  imagelist: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,private printer: Printer,private societe:SocieteProvider) {
    this.dataDevis=this.navParams.get('dataDevis');
    this.liste=this.navParams.get('liste');
    this.ttc=this.navParams.get('ttc');
    this.prixfinal=this.navParams.get('prixfinal');
    console.log("dataDevis:",this.dataDevis)
    console.log("liste:",this.liste)
    this.loadImage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprimerDevisPage');
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
