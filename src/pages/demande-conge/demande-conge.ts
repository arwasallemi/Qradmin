import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeurProvider } from '../../providers/employeur/employeur';
import { PointageProvider } from '../../providers/pointage/pointage';
import { EmployeurPage } from '../employeur/employeur';
import { SocieteProvider } from '../../providers/societe/societe';
import { BonRetourPage } from '../bon-retour/bon-retour';
import { HomePage } from '../home/home';
import { SortieVldPage } from '../sortie-vld/sortie-vld';
import { SortieCltPage } from '../sortie-clt/sortie-clt';
import { BonSortiePage } from '../bon-sortie/bon-sortie';
import { DevisPage } from '../devis/devis';
import { FacturePage } from '../facture/facture';
import { ListeFacturePage } from '../liste-facture/liste-facture';
import { ParamPage } from '../param/param';
import { SocietePage } from '../societe/societe';
import { ProduitPage } from '../produit/produit';
import { StockPage } from '../stock/stock';
import { ReservationPage } from '../reservation/reservation';
import { EntrepotPage } from '../entrepot/entrepot';
import { RessourcesPage } from '../ressources/ressources';
import { demandeCongeProvider } from '../../providers/demande-cong\u00E9/demande-cong\u00E9';



 @IonicPage()
@Component({
  selector: 'page-demande-conge',
  templateUrl: 'demande-conge.html',
})
export class DemandeCongePage {
  nomEmpl
  date1
  date2
  duree
  etat
  ref
  approbateur
  time1 = "00:00:00"
  time2= "00:00:00"
  time3= "00:00:00"
  listEmpl
  listpointage
  idEmp
  listEmplid
  soc
  listsociete
  time4 = "00:00:00"
  item
  listEmployeur: {};
  listep: any;
  constructor(
    public EmplProvider:EmployeurProvider, public providerSociete : SocieteProvider,
    public navCtrl: NavController, public navParams: NavParams,public crudemply : EmployeurProvider, public crudConge : demandeCongeProvider) {
    this.getEmpl()
    //this.loadpointage()
    this.load()
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
    console.log('ionViewDidLoad PointagePage');
  }

  getEmpl(){
    
  

      this.crudemply.get()
      .then(data => {
        this.listEmpl = data;



        console.log(this.idEmp,"idEmp")
     
    
      });
  
  }
  
  chooseid(){
  for(var i=0; i< this.listEmpl.length ;i++){
    if(this.listEmpl[i].name === this.nomEmpl)
    {
      this.idEmp = this.listEmpl[i].id
    //  console.log(this.idEmp,"idempppppppppppp")
    }
   

  }

  console.log(this.idEmp,"idempppppppppppp")
  }
  add(){
    let credentials = {
      date_debut:this.date1,
      date_fin:this.date2,
      duree:this.duree,
      ref:this.ref,
      etat:this.etat,
      approbateur:this.approbateur,
      employeur_id : this.idEmp
    };
  
    this.crudConge.saveconge(credentials).then((result)=>{
      console.log("info::::",credentials)
      
      console.log(result)
      alert('vos informations sont ajoutées avec succés')
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(credentials))
    })
  

   
   }
   load(){
    this.crudemply.get()
    .then(data => {
      this.listEmpl = data;



      console.log(this.idEmp,"idEmp")
      this.crudConge.loadconge()
      .then(data => {
        this.listpointage = data;
        console.log(this.listpointage,"listpointage")
  
  for(var i=0;i<this.listEmpl.length;i++){
    
    for(var j=0;j<this.listpointage.length;j++){
if(this.listEmpl[i].id===this.listpointage[j].employeur_id){
  this.listpointage[j].employeur_id=this.listEmpl[i].name
}
    }
  }
      });
  
    });
   }
  edit(a){
    console.log(a);
    //this.image=window.localStorage.getItem("image")
    let credentials = {
      duree:a.duree,
      date_debut :a.date_debut,
      date_fin:a.date_fin,
    
      };
    this.crudConge.edit(a.id, credentials);
    alert('vos informations sont changées avec succés')
    this.navCtrl.setRoot(DemandeCongePage) 
    console.log(a.duree ,"date_pointage")
    
   }
   loadconge(){
    this.crudConge.loadconge()
    .then(data => {
      this.listpointage = data;
      console.log(this.listpointage,"listpointage")


    });

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
