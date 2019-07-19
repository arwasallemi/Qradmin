import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ReservationProvider } from '../../providers/reservation/reservation';
import { ListereservationPage } from '../listereservation/listereservation';
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
import { EntrepotPage } from '../entrepot/entrepot';
import { RessourcesPage } from '../ressources/ressources';
import { SocieteProvider } from '../../providers/societe/societe';
 
 
/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {
  list: any;
  etat: string;
  listsociete: any;
  soc: any;
  listrecherche: any;
  search: string;

  constructor( private modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,
    public providerRes:ReservationProvider,public providerSociete : SocieteProvider) {
      this.getReservation()
      this.getsociete()
  }
  getsociete(){
    this.providerSociete.loadsociete()
    .then(data => {
      this.listsociete = data;
      console.log("listsociete:::::",this.listsociete);
     this.soc = this.listsociete[0]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }
getReservation(){
  this.providerRes.get()
  .then(data => {
    this.list = data;
    this.listrecherche=data
    console.log("list md:::::",this.list);
  });
}

brouillon(a:any){
  console.log("test test:",a.id)
  this.etat="brouillon";
  this.edit(a.id)
  this.navCtrl.setRoot(ReservationPage)
}
valide(a:any){
  console.log("test test:",a.id)
  this.etat="validé"
  this.edit(a.id)
  this.navCtrl.setRoot(ReservationPage)
}
cours(a:any){
  console.log("test test:",a.id)
  this.etat="en cours";
  this.edit(a.id)
  this.navCtrl.setRoot(ReservationPage)
  
}
edit(a){
  console.log("edit");
  let credentials = {

     status:this.etat
     
    };
  this.providerRes.edit(a,credentials);
  this.navCtrl.setRoot(ReservationPage)
 }
 delete(a){
  
  console.log("delete",a);
  this.providerRes.delete(a);
  this.navCtrl.setRoot(ReservationPage)
 }
 show(a){
  let modal = this.modalCtrl.create(ListereservationPage, { item:a});
  modal.present();
  console.log("res:",a);
 }
 //////////////////recherche
 initializeItems(): void {
  this.list = this.listrecherche;
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
if(this.search==="evenement"){
  this.list= this.list.filter((v) => {
    if(v.nom_evenement && q) {
      if (v.nom_evenement.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.list.length);
}
if(this.search==="client"){
  this.list= this.list.filter((v) => {
    if(v.nom_client && q) {
      if (v.nom_client.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.list.length);
} 
if(this.search==="date debut evenement"){
  this.list= this.list.filter((v) => {
    if(v.date_debut_evenement && q) {
      if (v.date_debut_evenement.toLowerCase().indexOf(q.toLowerCase()) > -1) {
        return true;
      }
      return false;
    }
  });

  console.log(q, this.list.length);
} 
if(this.search==="status"){
  this.list= this.list.filter((v) => {
    if(v.status && q) {
      if (v.status.toLowerCase().indexOf(q.toLowerCase()) > -1) {
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
