import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BonRetourProvider } from '../../providers/bon-retour/bon-retour';
import { ListeretourProvider } from '../../providers/listeretour/listeretour';
import { SocieteProvider } from '../../providers/societe/societe';
import { Printer, PrintOptions } from '@ionic-native/printer';

/**
 * Generated class for the ListeRetourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-retour',
  templateUrl: 'liste-retour.html',
})
export class ListeRetourPage {
item:any;
  list: any=[];
  detailretour: any=[];
  imagelist: any=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public listeretourprovider:ListeretourProvider,
    private societe:SocieteProvider,
    private printer: Printer,) {
    this.item=this.navParams.get('item');
    console.log("item::",this.item)
    this.get()
    this.loadImage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeRetourPage');
  }
get(){
  this.listeretourprovider.get()
    .then(data => {
      this.list= data;
      console.log("list:::::",this.list);
      for(var i=0;i<this.list.length;i++){
       
        if(this.list[i].bonRetour_id==this.item.id){

          this.detailretour.push(this.list[i])
        }
      }
      console.log("listee:::::",this.detailretour);
    });
    
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
