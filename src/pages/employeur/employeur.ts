import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EmployeurProvider } from '../../providers/employeur/employeur';

/**
 * Generated class for the EmployeurPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-employeur',
  templateUrl: 'employeur.html',
})
export class EmployeurPage {
  list: any;
  nom;
  prenom;
  cin;
  email;
  tel;
  adresse;
  sexe;
region_id=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:EmployeurProvider) {
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeurPage');
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
      name:this.nom,
      cin:this.cin,
      email:this.email,
      tel:this.tel,
      adresse:this.adresse,
      sexe:this.sexe,
 
    };
  
    this.provider.save(credentials).then((result)=>{
      console.log("info::::",credentials)
      
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(credentials))
    })
  
   this.navCtrl.setRoot(EmployeurPage)
   
   }

   edit(a){
    console.log("edit");
    let credentials = {
      libelle:"update",
       
       
      };
    this.provider.edit(a,credentials);
    this.navCtrl.setRoot(EmployeurPage)
   }
   delete(a){
    console.log("delete");
    this.provider.delete(a);
    this.navCtrl.setRoot(EmployeurPage)
   }
}
