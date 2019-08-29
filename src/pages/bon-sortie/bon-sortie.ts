import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { BonSortieProvider } from '../../providers/bon-sortie/bon-sortie';
import { ListesortiePage } from '../listesortie/listesortie';
import { ListesortieProvider } from '../../providers/listesortie/listesortie';
import { ProduitProvider } from '../../providers/produit/produit';
import { StockProvider } from '../../providers/stock/stock';
import { ReglementPage } from '../reglement/reglement';
import { FacturePage } from '../facture/facture';
import { FactPage } from '../fact/fact';
import { BonRetourPage } from '../bon-retour/bon-retour';
import { HomePage } from '../home/home';
import { SortieVldPage } from '../sortie-vld/sortie-vld';
import { SortieCltPage } from '../sortie-clt/sortie-clt';
import { EmployeurPage } from '../employeur/employeur';
import { DevisPage } from '../devis/devis';
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
import { TabsPage } from '../tabs/tabs';
import { ImprimerBonSortiePage } from '../imprimer-bon-sortie/imprimer-bon-sortie';

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
  listSortie: any;
  listS: any;
  listrecherche: any=[];
  listbrl: any=[];
  search: string;
  liste: any=[];
  listeSortie: any=[];
  produit={
    id:"",
    qte:"",
    entrepot:""
  };
  listprdt: any;
  liststock: any;
  listsociete: any;
  soc: any;
  listt: any;
  constructor(public providerSortie:ListesortieProvider,public navCtrl: NavController, 
    public navParams: NavParams,public provider:BonSortieProvider,
    public modalCtrl:ModalController,
    public providerListe:ListesortieProvider,
    public providerProduit:ProduitProvider,
    public providerStock:StockProvider,
    public providerSociete : SocieteProvider) {
    this.get();
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
    console.log('ionViewDidLoad BonSortiePage');
   
  }

  imprimer(a){
    console.log("imprimerrrrrrrrrr")
    //equipe_name: any; matricule: any; entrepot: any; etat: any; created_at: Date; note: any; };
   
     let dataBonSortie = {
      evenement:a.evenement,
      nom_client:a.nom_client,
      dateSortie:a.dateSortie,
      dateRetour:a.dateRetour,
      dateEvenement:a.dateEvenement,
      adresse_livraison:a.adresse_livraison,
      transporteur_nom:a.transporteur_nom,
      transporteur_tel:a.transporteur_tel,
      matricule:a.matricule,
      equipe_name:a.equipe_name,
      entrepot:a.entrepot,
      etat:a.etat,
      created_at:a.created_at,
  
     };
   
     let liste = dataBonSortie
       let modal = this.modalCtrl.create(ImprimerBonSortiePage, {liste:liste,});
       modal.present();
       console.log("Data:",dataBonSortie);
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
    this.listeSortie=[]
    console.log("test test:",a.id)
    this.etat="validé",
    this.getListe(a)
 this.edit(a.id)
   
  
  }
  cloture(a:any){
    console.log("test test:",a.id)
    this.etat="cloturé";
    this.edit(a.id)
  }
  getListe(a){
    this.providerListe.get()
    .then(dataListe => {
      this.liste = dataListe;
      console.log("list sortie:::::",this.liste);
      for(var i=0;i<this.liste.length;i++){
        if(this.liste[i].bonSortie_id===a.id){
         
       
      this.produit.qte=this.liste[i].qte
      this.produit.entrepot=a.entrepot
      /////////////find produit id
      var ref=this.liste[i].ref
    //  console.log("ref::",ref)
      this.providerProduit.get()
      .then(dataprdt => {
        this.listprdt= dataprdt;
    for(var j=0;j<this.listprdt.length;j++){
      if(this.listprdt[j].libelle===ref){
       // console.log("produitttt:::::",this.listprdt[j]);
       this.produit.id=this.listprdt[j].id
      }
    }
        console.log("list produit:::::",this.listprdt);
    
      });


      ////////////////////
      this.listeSortie.push(this.produit)
   //   console.log("produit:::::", this.produit);
       }
      }
     
      
    });
    console.log("sortie:::::", this.listeSortie);
    this.providerStock.get()
    .then(datastock => {
      this.liststock= datastock;
  
      console.log("listStock:::::",this.liststock);
      for(var i=0;i<this.listeSortie.length;i++){
        for(var j=0;j<this.liststock.length;j++){
if((this.listeSortie[i].id===this.liststock[j].produit) || (this.listeSortie[i].entrepot===this.liststock[j].entrepot )){
  console.log("stoooooooooock:::::",this.liststock[j].qte);
  var qt=(this.liststock[j].qte)-(this.listeSortie[i].qte)
  console.log(" new stoooooooooock:::::",qt);
  let data={
    qte:(this.liststock[j].qte)-(this.listeSortie[i].qte)
  }
  this.providerStock.edit(this.liststock[j].id,data)
}
        }
      }
    });
    
  }
  getcloture(){
   // this.get()
    for(var i=0;i<this.list.length;i++){
      if(this.listt[i].etat==="cloturé"){
        this.listbrl.push(this.list[i])
        this.listrecherche.push(this.list[i])
      }
                }
                this.list=this.listrecherche
  }
  getvalide(){
   // this.get()
    for(var i=0;i<this.list.length;i++){
      if(this.listt[i].etat==="validé"){
        this.listbrl.push(this.list[i])
        this.listrecherche.push(this.list[i])
      }
                }
                this.list=this.listrecherche
  }
  getbrouillon(){
   // this.get()
          for(var i=0;i<this.list.length;i++){
if(this.list[i].etat==="brouillon"){
  this.listbrl.push(this.list[i])
  this.listrecherche.push(this.list[i])
}
          }
          this.list=this.listrecherche
  }
  get(){
    this.provider.loadBonsortie()
    .then(data => {
      this.list= data;
      this.listt= data;
      console.log("list:::::",this.list);
//       for(var i=0;i<this.list.length;i++){
// if(this.list[i].etat==="brouillon"){
//   this.listbrl.push(this.list[i])
//   this.listrecherche.push(this.list[i])
// }
//       }
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
  facture(a){
    let modal = this.modalCtrl.create(FactPage,{bon:a});
    modal.present();
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
produitt(){
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
mvt(){
  this.navCtrl.setRoot(TabsPage)
}
}