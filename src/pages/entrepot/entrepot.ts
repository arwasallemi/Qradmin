import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EntrepotProvider } from '../../providers/entrepot/entrepot';
import { HttpClient } from '@angular/common/http';
import { SocieteProvider } from '../../providers/societe/societe';

/**
 * Generated class for the EntrepotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-entrepot',
  templateUrl: 'entrepot.html',
})
export class EntrepotPage {
  list:any;
  images
  code: any;
  adresse: any;
  libelle: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public societe : SocieteProvider,
    
    public provider:EntrepotProvider,public httpClient: HttpClient
    ) {
     this.loadImage() 
     }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EntrepotPage');
    this.get();
  }
  get(){
    this.provider.get()
    .then(data => {
      this.list = data;
      console.log("list:::::",this.list);
    });
  }
  add(){
    let credentials = {
    libelle:this.libelle,
    adresse:this.adresse,
    };
  
    this.provider.save(credentials).then((result)=>{
      console.log("info::::",credentials)
      
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(credentials))
    })
  
   this.navCtrl.setRoot(EntrepotPage)
   
   }
   
  loadImage(){

    this.societe.loadimageSociete()
    .then(data => {
      this.images = data;
      console.log(this.images,"imaages")
  
  
    });
  
  }

   edit(a){
    console.log("edit");
    let credentials = {
      libelle:"update",
       
       
      };
    this.provider.edit(a,credentials);
    this.navCtrl.setRoot(EntrepotPage)
   }
   delete(a){
    console.log("delete");
    this.provider.delete(a);
    this.navCtrl.setRoot(EntrepotPage)
   }
}
