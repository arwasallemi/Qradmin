import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { RessourcesProvider } from '../../providers/ressources/ressources';
import { BonRetourPage } from '../bon-retour/bon-retour';
import { HomePage } from '../home/home';
import { SortieVldPage } from '../sortie-vld/sortie-vld';
import { SortieCltPage } from '../sortie-clt/sortie-clt';
import { BonSortiePage } from '../bon-sortie/bon-sortie';
import { EmployeurPage } from '../employeur/employeur';
import { DevisPage } from '../devis/devis';
import { FacturePage } from '../facture/facture';
import { ListeFacturePage } from '../liste-facture/liste-facture';
import { ParamPage } from '../param/param';
import { SocietePage } from '../societe/societe';
import { ProduitPage } from '../produit/produit';
import { StockPage } from '../stock/stock';
import { ListereservationPage } from '../listereservation/listereservation';
import { EntrepotPage } from '../entrepot/entrepot';
import { ReservationPage } from '../reservation/reservation';
import { SocieteProvider } from '../../providers/societe/societe';

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
  soc: any;
  [x: string]: any;
  list: any;
  libelle: any;
  matricule: any;
  listsociete: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:RessourcesProvider,public providerSociete : SocieteProvider) {
    this.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RessourcesPage');
  
  }
  getsociete(){
    this.providerSociete.loadsociete()
    .then(data => {
      this.listsociete = data;
      console.log("listsociete:::::",this.listsociete);
     this.soc = this.listsociete[0]
    });
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
   ////////////////menu
bonretour(){
  this.navCtrl.setRoot(BonRetourPage)
}
dashboard(){
  this.navCtrl.setRoot(HomePage)
}
SortieV(){
  this.navCtrl.setRoot(SortieVldPage)
}
SortieC(){
  this.navCtrl.setRoot(SortieCltPage)
}
Sortieb(){
  this.navCtrl.setRoot(BonSortiePage)
}
tech(){
  this.navCtrl.setRoot(EmployeurPage)
}
Devis(){
  this.navCtrl.setRoot(DevisPage)
}
facture(){
  this.navCtrl.setRoot(FacturePage)
}
listFact(){
  this.navCtrl.setRoot(ListeFacturePage)
}
param(){
  this.navCtrl.setRoot(ParamPage)
}
societe(){
  this.navCtrl.setRoot(SocietePage)
}
produit(){
  this.navCtrl.setRoot(ProduitPage)
}
stock(){
  this.navCtrl.setRoot(StockPage)
}
reservation(){
  this.navCtrl.setRoot(ReservationPage)
}
entrepot(){
  this.navCtrl.setRoot(EntrepotPage)
}
ressource(){
  this.navCtrl.setRoot(RessourcesPage)
}
}
