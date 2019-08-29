import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { BonRetourProvider } from '../../providers/bon-retour/bon-retour';
import { ListeretourProvider } from '../../providers/listeretour/listeretour';
import { ProduitProvider } from '../../providers/produit/produit';
import { StockProvider } from '../../providers/stock/stock';
import { ListeRetourPage } from '../liste-retour/liste-retour';
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
import { RessourcesPage } from '../ressources/ressources';
import { ReservationPage } from '../reservation/reservation';
import { SocieteProvider } from '../../providers/societe/societe';
import { ImprimerBonRetourPage } from '../imprimer-bon-retour/imprimer-bon-retour';

/**
 * Generated class for the BonRetourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bon-retour',
  templateUrl: 'bon-retour.html',
})
export class BonRetourPage {
  list: any=[];
  listretour: any=[];
  detailretour: any=[];
  listproduit: any=[];
  liststock: any=[];
  listrecherche: any=[];
  search: string;
  listsociete: any;
  soc: any;
 // dataBonRetour: { dateRetour: Date; transporteur_nom: any; transporteur_tel: number; equipe_name: any; matricule: any; entrepot: any; etat: any; created_at: Date; note: any; };

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public retourprovider:BonRetourProvider,
    public listeretourprovider:ListeretourProvider,
    public Produitprovider:ProduitProvider,
    public Stockprovider:StockProvider,
    public modalCtrl:ModalController,   public providerSociete : SocieteProvider) {
      this.get()
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
    console.log('ionViewDidLoad BonRetourPage');
  }
  get(){
    this.retourprovider.loadBonsortie()
    .then(data => {
      this.list= data;
      this.listrecherche=data;
      console.log("list:::::",this.list);
    });
    
  }
   //////////////////recherche
   initializeItems(): void {
    this.list= this.listrecherche;
  }
  imprimer(a){
 //equipe_name: any; matricule: any; entrepot: any; etat: any; created_at: Date; note: any; };

  let dataBonRetour = {
      dateRetour:a.dateRetour,
      transporteur_nom:a.transporteur_nom,
      transporteur_tel:a.transporteur_tel,
      equipe_name:a.equipe_name,
      matricule:a.matricule,
      entrepot:a.entrepot,
      etat:a.etat,
      created_at:a.created_at,
      note : a.note
  };

  let liste = dataBonRetour
    let modal = this.modalCtrl.create(ImprimerBonRetourPage, {liste:liste,});
    modal.present();
    console.log("Data:",dataBonRetour);
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
  if(this.search==="Date retour"){
    this.list= this.list.filter((v) => {
      if(v.dateRetour && q) {
        if (v.dateRetour.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.list.length);
  }
  if(this.search==="matricule"){
    this.list = this.list.filter((v) => {
      if(v.matricule && q) {
        if (v.matricule.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.list.length);
  } 
  if(this.search==="nom transporteur"){
    this.list= this.list.filter((v) => {
      if(v.transporteur_nom && q) {
        if (v.transporteur_nom.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.list.length);
  } 
  if(this.search==="etat"){
    this.list= this.list.filter((v) => {
      if(v.etat && q) {
        if (v.etat.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.list.length);
  } 
  }
valide(a){

  this.listeretourprovider.get()
  .then(data => {
    this.listretour= data;
    console.log("list:::::",this.listretour);
    for(var i=0;i<this.listretour.length;i++){
      let produit={
        ref:'',
        qte:'',
        id:'',
      }
      if(this.listretour[i].bonRetour_id==a.id){
      
        console.log("listee:::::",this.listretour[i]);
        produit.qte=this.listretour[i].qte
        produit.ref=this.listretour[i].ref
        this.detailretour.push(produit)
      }
    }
    console.log("list detail :::::",this.detailretour);
    //////////// produit id
    this.Produitprovider.get()
    .then(dataproduit => {
      this.listproduit= dataproduit;
      console.log("list produit:::::",this.listproduit);
      for(var i=0;i<this.listproduit.length;i++){
        for(var j=0;j<this.detailretour.length;j++){
        if(this.detailretour[j].ref==this.listproduit[i].libelle){
          this.detailretour[j].id=this.listproduit[i].id
        }
        }
      }
      console.log("list detail 2 :::::",this.detailretour);
      ////////////// stock 
      this.Stockprovider.get()
      .then(datastock => {
        this.liststock= datastock;
        console.log("list:::::",this.liststock);
        for(var i=0;i<this.liststock.length;i++){
          for(var j=0;j<this.detailretour.length;j++){
if(this.detailretour[j].id==this.liststock[i].produit && this.liststock[i].entrepot==a.entrepot){
  console.log("stock:::::",this.liststock[i].qte);
  this.liststock[i].qte=this.liststock[i].qte+this.detailretour[j].qte
  console.log("new stock:::::",this.liststock[i].qte);
 let credentials={
   qte: this.liststock[i].qte
 }
  this.Stockprovider.edit(this.liststock[i].id,credentials);
  let valide={
    etat:"validé"
  }
  this.retourprovider.edit(a.id,valide);
}
          }
        }
      });
    });
  });
  
}
show(a){
  let modal = this.modalCtrl.create(ListeRetourPage,{ item:a});
  modal.present();
  console.log("res:",a);
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
