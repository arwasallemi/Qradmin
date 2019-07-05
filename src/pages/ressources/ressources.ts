import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RessourcesProvider } from '../../providers/ressources/ressources';

/**
 * Generated class for the RessourcesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ressources',
  templateUrl: 'ressources.html',
})
export class RessourcesPage {
  list: any;
  libelle: any;
  matricule: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:RessourcesProvider) {
    this.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RessourcesPage');
  
  }
  get(){
    this.provider.get()
    .then(rs => {
      this.list = rs;
      console.log("list:::::",this.list);
    });
  }
  add(){
    let credentials = {
    libelle:this.libelle,
    matricule:this.matricule,
    };
  
    this.provider.save(credentials).then((result)=>{
      console.log("info::::",credentials)
      
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(credentials))
    })
  
   this.navCtrl.setRoot(RessourcesPage)
   
   }

   edit(a){
    console.log("edit");
    let credentials = {
      libelle:"update",
       
       
      };
    this.provider.edit(a,credentials);
    this.navCtrl.setRoot(RessourcesPage)
   }
   delete(a){
    console.log("delete");
    this.provider.delete(a);
    this.navCtrl.setRoot(RessourcesPage)
   }
}
