import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { BonSortieProvider } from '../../providers/bon-sortie/bon-sortie';

/**
 * Generated class for the BonSortiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bon-sortie',
  templateUrl: 'bon-sortie.html',
})
export class BonSortiePage {
  list: any;
  etat: any;
  item={
etat:'',
id:'',
dateSortie:'',
dateRetour:'',
dateEvenement:'',
adresse_livraison:'',
transporteur_nom:'',
transporteur_tel:'',
matricule:'',
evenement:'',
equipe_name:'',
created_at:'',
updated_at:''
}
  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:BonSortieProvider) {
    this.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonSortiePage');
   
  }
 
  brouillon(a:any){
    console.log("test test:",a.id)
    this.etat="brouillon";
    this.edit(a.id)
  }
  valide(a:any){
    console.log("test test:",a.id)
    this.etat="validé"
    this.edit(a.id)
  }
  cours(a:any){
    console.log("test test:",a.id)
    this.etat="en cours";
    this.edit(a.id)
  }
  get(){
    this.provider.loadBonsortie()
    .then(data => {
      this.list= data;
      console.log("list:::::",this.list);
    });
    
  }
  edit(a){
    console.log("edit");
    let credentials = {
  
       etat:this.etat
       
      };
    this.provider.edit(a,credentials);
    this.navCtrl.setRoot(BonSortiePage)
   }
   delete(a){
    console.log("delete",a);
    this.provider.delete(a);
    this.navCtrl.setRoot(BonSortiePage)
   }
}
