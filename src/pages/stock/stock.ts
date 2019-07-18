import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EntrepotProvider } from '../../providers/entrepot/entrepot';
import { ProduitProvider } from '../../providers/produit/produit';
import { StockProvider } from '../../providers/stock/stock';
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
import { ListereservationPage } from '../listereservation/listereservation';
import { EntrepotPage } from '../entrepot/entrepot';
import { RessourcesPage } from '../ressources/ressources';
import { ReservationPage } from '../reservation/reservation';
import { SocieteProvider } from '../../providers/societe/societe';

/**
 * Generated class for the StockPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-stock',
  templateUrl: 'stock.html',
})
export class StockPage {
  listEnt: any;
  listPrdt: any;
entre:any;
ent = {
  id:'',
  libelle:'',
  };

  id:any;
  list:any;
  prod: any;
  qte: any;
  idEnt: any;
  idProd: any;
  listsociete: any;
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public providerEntrepot:EntrepotProvider,
    public providerProduit:ProduitProvider,public stockprovider:StockProvider,public providerSociete : SocieteProvider) {
this.listEnt=[]
this.listPrdt=[]
    this.selectEntrepot();
    this.selectProduit();
    this.get();
    this.getsociete()
  }
  getsociete(){
    this.providerSociete.loadsociete()
    .then(data => {
      this.listsociete = data;
      console.log("listsociete:::::",this.listsociete);
     this.item = this.listsociete[0]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StockPage');
  }
  selectEntrepot(){
    this.providerEntrepot.get()
    .then(data => {
      this.listEnt = data;
      console.log("list:::::",this.listEnt);
    });
    console.log("entrepot:::::",this.entre);
    for(var i=0;i<this.listEnt.length;i++){
      if(this.entre==this.listEnt[i].libelle){
this.idEnt=this.listEnt[i].id;
console.log("id entrepot:",this.idEnt)
      }
    }
  }
  selectProduit(){
    this.providerProduit.get()
    .then(info => {
      this.listPrdt= info;
      console.log("produit:::::",this.listPrdt);
    });
    for(var i=0;i<this.listPrdt.length;i++){
      if(this.prod==this.listPrdt[i].ref){
this.idProd=this.listPrdt[i].id;
console.log("id produit:",this.idProd)
      }
    }
  }
 get(){
    this.stockprovider.get()
    .then(res => {
      this.list= res;
      console.log("list:::::",this.list);
    });
  }
  add(){
    let credentials = {
  produit:this.idProd,
  entrepot:this.idEnt,
  qte:this.qte,
       
      };
    
      this.stockprovider.save(credentials).then((result)=>{
        console.log("info::::",credentials)
        
        console.log(result)
        
      },(err)=>{
        console.log("insert err: "+ err)
        console.log("this.myInfo: "+ JSON.stringify(credentials))
      })
    
     this.navCtrl.setRoot(StockPage)
     
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
