import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { ClientProvider } from '../../providers/client/client';
import { ProduitProvider } from '../../providers/produit/produit';
import { FactureProvider } from '../../providers/facture/facture';
import { ListefactureProvider } from '../../providers/listefacture/listefacture';
import { ConditionProvider } from '../../providers/condition/condition';
import { ModeProvider } from '../../providers/mode/mode';
import { ImprimerfacturePage } from '../imprimerfacture/imprimerfacture';
import { BonRetourPage } from '../bon-retour/bon-retour';
import { HomePage } from '../home/home';
import { SortieVldPage } from '../sortie-vld/sortie-vld';
import { SortieCltPage } from '../sortie-clt/sortie-clt';
import { BonSortiePage } from '../bon-sortie/bon-sortie';
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

/**
 * Generated class for the FacturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-facture',
  templateUrl: 'facture.html',
})
export class FacturePage {
  datafacture: { ref: any; societe: any; type: any; remise: any; date: any; condition_regl: any; date_limite_reglement: any; mode_regl: any; cpte_bancaire: any; montant_Ht: string; montant_tva: string; montant_ttc: any; etat: any; projet: any; incoterms: any; };
  listCdt: any;
  listMd: any;
  listDvs: any=[];
  dataf: { ref: any; societe: any; type: any; remise: any; date: any; condition_regl: any; date_limite_reglement: any; mode_regl: any; cpte_bancaire: any; montant_Ht: string; montant_tva: string; montant_ttc: number; etat: any; projet: any; incoterms: any; };
  title: string;
  listsociete: any;
  soc: any;
  [x: string]: any;
 
users
searchInput
userslist
 
prixfinal=0;
hideMe=false;
  listPdt: any=[];
  produit: any;
  prix_location: any;
  t: any;
  total: number;
  quantite: any;
  ttc=0;
  liste: any=[];
  length: any=0;
  ref: any;
  type: any;
  remise: any;
  date: any;
  condition: any;
  mode: any;
  compte: any;
   min=Date()
  constructor(
    public facture:FactureProvider,
    public listeprovider:ListefactureProvider,
    public produitProvider:ProduitProvider,public navCtrl: NavController, 
    public navParams: NavParams ,public authProvider : ClientProvider,public Cdtprovider:ConditionProvider,
    public Mdprovider:ModeProvider,
    public modalCtrl:ModalController, public providerSociete : SocieteProvider) {
  this.loadPeople()
  this.users = [];
  this.getProduit()
  this.getCdt()
  this.getMd();
  this.getfacture();
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
  calcul(){
    this.total=this.quantite*this.prix_location+((this.quantite*this.prix_location)/100)*this.t
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FacturePage');
    var y = document.getElementById("form2");
    y.style.display = "none";
  }
  getCdt(){
    this.Cdtprovider.get()
    .then(cdt => {
      this.listCdt= cdt;
      console.log("condition:::::",this.listCdt);
    });
    console.log("condition:::::",this.condition);
  }
  getMd(){
    this.Mdprovider.get()
    .then(md => {
      this.listMd= md;
      console.log("mode:::::",this.listMd);
    });
    console.log("mode:::::",this.mode);
  }
  getProduit(){
    this.produitProvider.get()
    .then(pdt => {
      this.listPdt= pdt;
      console.log("pdt list:::::",this.listPdt);
    });
  }
  supprimer(a){
    console.log("itemmmmmmmmmmmmmmm",a)
     let index=a-1
     console.log("index",index)
    this.liste.splice(index,1);
//  for(var i=0;i<this.listeDevis.length;i++){
//   this.listeDevis[i].num=this.listeDevis[i].num-1
//  }
     }
     getfacture(){
      this.facture.get()
      .then(dvs => {
        this.listDvs= dvs;
   
        console.log("dvs:::::",this.listDvs);
        for(var i=0;i<this.listDvs.length;i++){
          this.length=this.listDvs[i].id+1
        }
        console.log("length:::::",this.length);
      });
    }
     Confirmer(){
      this.add();
  for(var i=0;i<this.liste.length;i++){
    let facturedata = {
    produit:this.liste[i].produit,
    qte:this.liste[i].quantite,
    facture_id:this.length,
    prix_unitaire_HT:this.liste[i].prix_location,
    prix_unitaire_TTC:this.total,   
    };
           
             this.listeprovider.save(facturedata).then((result)=>{
              console.log("devis info::::",facturedata)
              
              console.log(result)
              
            },(err)=>{
              console.log("insert err: "+ err)
              console.log("this.myInfo: "+ JSON.stringify(facturedata))
            })
  }
  this.dataf = {
    ref:this.ref,
    societe:this.searchInput,
    type:this.type,
    remise:this.remise,
    date:this.date,
    condition_regl:this.condition,
    date_limite_reglement:this.date,
    mode_regl:this.mode,
    cpte_bancaire:this.compte,
    montant_Ht:"...",
    montant_tva:"...",
    montant_ttc:this.prixfinal,
    etat:this.etat,
    projet:this.projet,
    incoterms:this.incoterms,
  }
let liste = this.liste
this.title="Bon de vente"
  let modal = this.modalCtrl.create(ImprimerfacturePage, {dataf:this.dataf,liste:liste,ttc:this.ttc,title:this.title});
  modal.present();
  console.log("Data:",this.dataDevis);

    }
    final(){
      this.prixfinal=this.ttc-this.remise
        }
    add(){
      let credentials = {
        ref:this.ref,
        societe:this.searchInput,
        type:this.type,
        remise:this.remise,
        date:this.date,
        condition_regl:this.condition,
        date_limite_reglement:this.date,
        mode_regl:this.mode,
        cpte_bancaire:this.compte,
        montant_Ht:"...",
        montant_tva:"...",
        montant_ttc:this.prixfinal,
        etat:this.etat,
        projet:this.projet,
        incoterms:this.incoterms,
            };
          this.datafacture=credentials;
            this.facture.save(credentials).then((result)=>{
              console.log("info::::",credentials)
              
              console.log(result)
              
            },(err)=>{
              console.log("insert err: "+ err)
              console.log("this.myInfo: "+ JSON.stringify(credentials))
            })
          
          
           
        }
  ajouter(){
  
    let itempdt={
       produit:"",
       prix_location:"",
       quantite:"",
       total:0,
       num:0,
     }
   itempdt.prix_location=this.prix_location,
   itempdt.produit=this.produit,
   itempdt.quantite=this.quantite
   itempdt.total=this.total
  
  itempdt.num=this.liste.length+1
     console.log("itempdt:::",itempdt)
     this.liste.push(itempdt)
     console.log("listeeeeeee:::",this.liste)
     this.ttc=this.ttc+this.total
 
   }
  select(){

    for(var i=0;i<this.listPdt.length;i++){
    //if(this.listPdt[i].libelle.match(this.produit)===null){
    if(this.listPdt[i].libelle!==this.produit){
      console.log("produit:",this.listPdt[i].libelle)
    }else{
      // this.prix_location=this.listPdt[i].prix_location
      // console.log("prix:",this.listPdt[i].prix_location,"prdt:",this.produit,"list libelle::",this.listPdt[i].libelle)
      this.prix_location=this.listPdt[i].prix_location
      this.t=this.listPdt[i].tva
    console.log("produitttt:",this.t)
    console.log("prixx:",this.prix_location,"prdt:",this.produit,"list libelle::",this.listPdt[i].libelle)
    }
  }
}
  suivant(){
    var x = document.getElementById("form1");


    x.style.display = "none";

var y = document.getElementById("form2");

    y.style.display = "block";
  }
  back(){
    var x = document.getElementById("form1");


    x.style.display = "block";

var y = document.getElementById("form2");

    y.style.display = "none";
  }
  loadPeople(){
    this.authProvider.getclient()
    .then(data => {
      this.users = data;
      console.log(this.users,"this.userssssssssssssssssss")
this.userslist = data
    });

  }
  getItems(ev) { 
    this.hideMe = true;
    if (this.searchInput == '') {
      this.users = [];
      return;
    }
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the ev target
    var val = ev.target.value;
  
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
  
      this.users = this.users.filter((item) => {
        console.log(item.nom ,"nommmmmmmmmmmmmmmm")
        return (item.nom.toLowerCase().indexOf(val.toLowerCase()) > -1 ) || (item.prenom.toLowerCase().indexOf(val.toLowerCase()) > -1);
  
      })
    }
  
    
  }
  
  
    chooseItem(item: any) {
      this.hideMe = true;
      item.nom.split[','];
      item.prenom.split[','];
      console.log(item);
    
      this.searchInput = item.nom.concat(" "+item.prenom)
      
      this.users = [];
      console.log(item.adresse,"adresse");
      // this.searchInput2 = item.adresse
      // this.adresse =  item.adresse
      this.userslist = [];
  }
  initializeItems() {
    // if (this.searchInput == '') {
    //   this.userslist = [];
    //   return;
    // }

    
    this.users = this.userslist;
    if (this.searchInput == '') {
      this.userslist = [];
      return;
    }
     }
     imprimer(){
      this.dataf = {
        ref:this.ref,
        societe:this.searchInput,
        type:this.type,
        remise:this.remise,
        date:this.date,
        condition_regl:this.condition,
        date_limite_reglement:this.date,
        mode_regl:this.mode,
        cpte_bancaire:this.compte,
        montant_Ht:"...",
        montant_tva:"...",
        montant_ttc:this.prixfinal,
        etat:this.etat,
        projet:this.projet,
        incoterms:this.incoterms,
      }
    let liste = this.liste
    this.title="F.Proforma"
      let modal = this.modalCtrl.create(ImprimerfacturePage, {dataf:this.dataf,liste:liste,ttc:this.ttc,title:this.title});
      modal.present();
      console.log("Data:",this.dataDevis);
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
}
