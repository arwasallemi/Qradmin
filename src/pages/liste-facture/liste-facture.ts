import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { FactureProvider } from '../../providers/facture/facture';
import { ReglementPage } from '../reglement/reglement';
import { BonRetourPage } from '../bon-retour/bon-retour';
import { HomePage } from '../home/home';
import { SortieVldPage } from '../sortie-vld/sortie-vld';
import { SortieCltPage } from '../sortie-clt/sortie-clt';
import { BonSortiePage } from '../bon-sortie/bon-sortie';
import { EmployeurPage } from '../employeur/employeur';
import { DevisPage } from '../devis/devis';
import { FacturePage } from '../facture/facture';
import { ParamPage } from '../param/param';
import { SocietePage } from '../societe/societe';
import { ProduitPage } from '../produit/produit';
import { StockPage } from '../stock/stock';
import { ListereservationPage } from '../listereservation/listereservation';
import { EntrepotPage } from '../entrepot/entrepot';
import { RessourcesPage } from '../ressources/ressources';
import { ReservationPage } from '../reservation/reservation';
import { SocieteProvider } from '../../providers/societe/societe';

/**
 * Generated class for the ListeFacturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-liste-facture',
  templateUrl: 'liste-facture.html',
})
export class ListeFacturePage {
  soc: any;
 
  list: any=[];
  search: string;
  listrecherche: any=[];
  listsociete: any;
 

  constructor( public providerSociete : SocieteProvider, public modalCtrl:ModalController,public navCtrl: NavController, public navParams: NavParams,public facture:FactureProvider) {
    this.getfacture()
    this. getsociete()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListeFacturePage');
  }
  getsociete(){
    this.providerSociete.loadsociete()
    .then(data => {
      this.listsociete = data;
      console.log("listsociete:::::",this.listsociete);
     this.soc = this.listsociete[0]
    });
  }
  getfacture(){
    this.facture.get()
    .then(fct => {
      this.list= fct;
      this.listrecherche=fct
 
      console.log("dvs:::::",this.list);
    });
  }
  reglement(a){
    let modal = this.modalCtrl.create(ReglementPage, {data:a});
      modal.present();
  }
   //////////////////recherche
   initializeItems(): void {
    this.list= this.listrecherche;
  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
  
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
    if(this.search==="type"){
      this.list = this.list.filter((v) => {
        if(v.type && q) {
          if (v.type.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    
      console.log(q, this.list.length);
    }
    if(this.search==="projet"){
      this.list = this.list.filter((v) => {
        if(v.projet && q) {
          if (v.projet.toLowerCase().indexOf(q.toLowerCase()) > -1) {
            return true;
          }
          return false;
        }
      });
    
      console.log(q, this.list.length);
    }
  if(this.search==="etat"){
    this.list = this.list.filter((v) => {
      if(v.etat && q) {
        if (v.etat.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.list.length);
  }
  if(this.search==="client"){
    this.list = this.list.filter((v) => {
      if(v.societe && q) {
        if (v.societe.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.list.length);
  } 
  if(this.search==="date"){
    this.list= this.list.filter((v) => {
      if(v.date && q) {
        if (v.date.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.list.length);
  } 
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
facturee(){
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
