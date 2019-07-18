import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { DelaiProvider } from '../../providers/delai/delai';
import { ConditionProvider } from '../../providers/condition/condition';
import { ModeProvider } from '../../providers/mode/mode';
import { TvaProvider } from '../../providers/tva/tva';
import { BonRetourPage } from '../bon-retour/bon-retour';
import { HomePage } from '../home/home';
import { SortieVldPage } from '../sortie-vld/sortie-vld';
import { SortieCltPage } from '../sortie-clt/sortie-clt';
import { BonSortiePage } from '../bon-sortie/bon-sortie';
import { EmployeurPage } from '../employeur/employeur';
import { DevisPage } from '../devis/devis';
import { FacturePage } from '../facture/facture';
import { ListeFacturePage } from '../liste-facture/liste-facture';
import { SocietePage } from '../societe/societe';
import { ProduitPage } from '../produit/produit';
import { StockPage } from '../stock/stock';
import { ListereservationPage } from '../listereservation/listereservation';
import { EntrepotPage } from '../entrepot/entrepot';
import { RessourcesPage } from '../ressources/ressources';
import { ReservationPage } from '../reservation/reservation';
import { SocieteProvider } from '../../providers/societe/societe';



@Component({
  selector: 'page-param',
  templateUrl: 'param.html',
})
export class ParamPage {
  @ViewChild(Nav) nav:Nav;
  list: any;
  listmd: any;
  listcd: any;
  listTva: any;
  dataTva
  dataDelai
  dataMode
  dataCondition
  listsociete: any;
  soc: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public Delai:DelaiProvider,
     public Mode:ModeProvider,
     public tva : TvaProvider,
     public Condition:ConditionProvider,
     public Alert:AlertController,
     public providerSociete : SocieteProvider
     ) {
       this.getDelai();
       this.getCondition();
       this.getMode();
       this.getTva();
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
    console.log('ionViewDidLoad ParamPage');
  }
getDelai(){
  this.Delai.get()
  .then(data => {
    this.list = data;
    console.log("list delai:::::",this.list);
  });
}
getMode(){
  this.Mode.get()
  .then(md => {
    this.listmd = md;
    console.log("list md:::::",this.listmd);
  });
}
getCondition(){
  this.Condition.get()
  .then(cd => {
    this.listcd = cd;
    console.log("list cd:::::",this.listcd);
  });
}
getTva(){
  this.tva.get()
  .then(tva => {
    this.listTva = tva;
    console.log("list tva:::::",this.listTva);
  });
}
// ADD delai

adddelai()                                                                                                       {
  let alert = this.Alert.create({
    title: 'nouvelle entrée',
    inputs: [
      {
        name: 'delai',
        placeholder: 'delai'
      },
    
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'ajouter',
        handler: data => {
          console.log("data:::",data.delai)
this.dataDelai =data.delai
let credentials = {
  delai:this.dataDelai,
 
          
         };
       
         this.Delai.save(credentials).then((result)=>{
           console.log("info::::",credentials)
           
           console.log(result)
           
         },(err)=>{
           console.log("insert err: "+ err)
           console.log("this.myInfo: "+ JSON.stringify(credentials))
         })
       
     //   this.navCtrl.setRoot(DevisPage)
        }
      }
    ]
  });
  alert.present(alert);
}
addMode()                                                                                                       {
  let alertMode = this.Alert.create({
    title: 'nouvelle entrée',
    inputs: [
      {
        name: 'mode',
        placeholder: 'mode de règlement'
      },
    
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'ajouter',
        handler: datamode => {
          console.log("data:::",datamode.mode)
          this.dataMode =datamode.mode
          let credentials = {
            mode:this.dataMode,
           
                    
                   };
                 
                   this.Mode.save(credentials).then((result)=>{
                     console.log("info::::",credentials)
                     
                     console.log(result)
                     
                   },(err)=>{
                     console.log("insert err: "+ err)
                     console.log("this.myInfo: "+ JSON.stringify(credentials))
                   })
                 
               //   this.navCtrl.setRoot(DevisPage)
                  }
                }
              ]
            });
            alertMode.present(alertMode);
}
addCondition()                                                                                                       {
  let alertCondition = this.Alert.create({
    title: 'nouvelle entrée',
    inputs: [
      {
        name: 'condition',
        placeholder: 'condition de règlement'
      },
    
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'ajouter',
        handler: datacondition => {
          console.log("data:::",datacondition.condition)
          this.dataCondition =datacondition.condition
          let credentials = {
            condition:this.dataCondition,
           
                    
                   };
                 
                   this.Condition.save(credentials).then((result)=>{
                     console.log("info::::",credentials)
                     
                     console.log(result)
                     
                   },(err)=>{
                     console.log("insert err: "+ err)
                     console.log("this.myInfo: "+ JSON.stringify(credentials))
                   })
                 
               //   this.navCtrl.setRoot(DevisPage)
                  }
                }
              ]
            });
            alertCondition.present(alertCondition);
}
addtva()                                                                                                       {
  let alerttva = this.Alert.create({
    title: 'nouvelle entrée',
    inputs: [
      {
        name: 'tva',
        placeholder: 'Valeur % '
      },
    
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'ajouter',
        handler: datatva => {
          console.log("data:::",datatva.tva)
          this.dataTva =datatva.tva
          let credentials = {
            valeur:this.dataTva,
           
                    
                   };
                 
                   this.tva.save(credentials).then((result)=>{
                     console.log("info::::",credentials)
                     
                     console.log(result)
                     
                   },(err)=>{
                     console.log("insert err: "+ err)
                     console.log("this.myInfo: "+ JSON.stringify(credentials))
                   })
                 
               //   this.navCtrl.setRoot(DevisPage)
                  }
                }
              ]
            });
            alerttva.present(alerttva);
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
