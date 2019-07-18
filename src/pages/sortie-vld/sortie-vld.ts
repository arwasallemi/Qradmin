import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { BonSortieProvider } from '../../providers/bon-sortie/bon-sortie';
import { ListesortiePage } from '../listesortie/listesortie';
import { ListesortieProvider } from '../../providers/listesortie/listesortie';
import { BonRetourPage } from '../bon-retour/bon-retour';
import { HomePage } from '../home/home';
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
/**
 * Generated class for the SortieVldPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-sortie-vld',
  templateUrl: 'sortie-vld.html',
})
export class SortieVldPage {
  soc: any;
  [x: string]: any;
  [x: string]: any;

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
  listSortie: any;
  listS: any;
  listrecherche: any=[];
  listbrl: any=[];
  search: string;
  listsociete: any;
  
  constructor(public providerSortie:ListesortieProvider,public navCtrl: NavController, 
    public navParams: NavParams,public provider:BonSortieProvider,
    public modalCtrl:ModalController,public providerSociete : SocieteProvider) {
    this.get();
    this.getsociete()
  }
  getsociete(){
    this.providerSociete.loadsociete()
    .then(data => {
      this.listsociete = data;
      console.log("listsociete:::::",this.listsociete);
     this.soc= this.listsociete[0]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad BonSortiecltPage');
   
  }
  getSortie(){
    this.providerSortie.get()
    .then(datast => {
      this.listSortie = datast;
      console.log("list sortie:::::",this.list);
      for(var i=0;i<this.listSortie.length;i++){
        if(this.listSortie[i].bonSortie_id===this.item.id){
         
          this.listS.push(this.listSortie[i])
       }
      }
      console.log(" sortie:::::", this.listSortie);
    });
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
      for(var i=0;i<this.list.length;i++){
if(this.list[i].etat==="validé"){
  this.listbrl.push(this.list[i])
  this.listrecherche.push(this.list[i])
}
      }
    });
    
  }
  edit(a){
    console.log("edit");
    let credentials = {
  
       etat:this.etat
       
      };
    this.provider.edit(a,credentials);
    this.navCtrl.setRoot(SortieVldPage)
   }
   delete(a){
    console.log("delete",a);
    this.provider.delete(a);
    this.navCtrl.setRoot(SortieVldPage)
   }
   show(a){
    let modal = this.modalCtrl.create(ListesortiePage, { item:a});
    modal.present();
    console.log("res:",a);
   }
   //////////////////recherche
   initializeItems(): void {
    this.listbrl = this.listrecherche;
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
    this.listbrl = this.listbrl.filter((v) => {
      if(v.evenement && q) {
        if (v.evenement.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.listbrl.length);
  }
  if(this.search==="client"){
    this.listbrl = this.listbrl.filter((v) => {
      if(v.nom_client && q) {
        if (v.nom_client.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.listbrl.length);
  } 
  if(this.search==="date evenement"){
    this.listbrl = this.listbrl.filter((v) => {
      if(v.dateEvenement && q) {
        if (v.dateEvenement.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.listbrl.length);
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
