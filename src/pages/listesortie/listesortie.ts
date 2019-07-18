import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListesortieProvider } from '../../providers/listesortie/listesortie';
import { PrintOptions, Printer } from '@ionic-native/printer';
import { SocieteProvider } from '../../providers/societe/societe';

/**
 * Generated class for the ListesortiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listesortie',
  templateUrl: 'listesortie.html',
})
export class ListesortiePage {
  list: any;
 
  item: any;
  listSortie: any=[];
  imagelist: any=[];

  constructor(
    private societe:SocieteProvider,
    private printer: Printer,
    public navCtrl: NavController, public navParams: NavParams,public provider:ListesortieProvider) {
    this.item=this.navParams.get('item');
    console.log("itemmmmm",this.item);
    this.get()
    this.loadImage()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListesortiePage');
  }
get(){
  this.provider.get()
  .then(data => {
    this.list = data;
    console.log("list sortie:::::",this.list);
    for(var i=0;i<this.list.length;i++){
      if(this.list[i].bonSortie_id===this.item.id){
       
        this.listSortie.push(this.list[i])
     }
    }
    console.log(" sortie:::::", this.listSortie);
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
