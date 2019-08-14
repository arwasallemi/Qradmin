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
import { DemandeCongePage } from '../demande-conge/demande-conge';
import { PointagePage } from '../pointage/pointage';
import { SalaireProvider } from '../../providers/salaire/salaire';



@IonicPage()
@Component({
  selector: 'page-salaire',
  templateUrl: 'salaire.html',
})
export class SalairePage {
  nomEmpl
  nbrJour
  salaire_unitaire
  nbrHeure_travail
  nbrHeure_ajoute =0
  salaireNette =1
  salaireBrute
  date1
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
    public navCtrl: NavController, public navParams: NavParams,public crudemply : EmployeurProvider, public crudSalaire : SalaireProvider) {
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
  delete(a){
    console.log("delete");
    this.crudSalaire.delete(a);                 
    this.navCtrl.setRoot(SalairePage)                                           
   }
  add(){

    this.salaireNette = this.salaireNette * this.nbrHeure_travail * this.salaire_unitaire * this.nbrJour
    console.log(this.salaireNette,"salairenette")
    if(this.nbrHeure_ajoute != 0){
      this.salaireNette =  this.salaireNette + (this.nbrHeure_ajoute * this.salaire_unitaire)
      console.log(this.salaireNette,"salaire ajoutee")
    }

    let credentials = {
      nbrJour:this.nbrJour,
      salaire_unitaire:this.salaire_unitaire,
      nbrHeure_travail:this.nbrHeure_travail,
      nbrHeure_ajoute:this.nbrHeure_ajoute,
      salaireNette:this.salaireNette,
      salaireBrute:0,
      employeur_id : this.idEmp
    };
  
    this.crudSalaire.saveSalaire(credentials).then((result)=>{
      console.log("info::::",credentials)
      
      console.log(result)
      
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
      this.crudSalaire.loadSalaire()
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
      nbrJour:a.nbrJour,
      salaire_unitaire :a.salaire_unitaire,
      nbrHeure_travail:a.nbrHeure_travail,
      nbrHeure_ajoute :a.nbrHeure_ajoute,
      salaireNette :a.salaireNette,
      salaireBrute :a.salaireBrute,
      };
    this.crudSalaire.edit(a.id, credentials);
    this.navCtrl.setRoot(SalairePage) 
    console.log(a.nbrJour ,"date_pointage")
   }
   loadSalaire(){
    this.crudSalaire.loadSalaire()
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
pointage(){
  this.navCtrl.setRoot(PointagePage)
}
dmeConge(){
  this.navCtrl.setRoot(DemandeCongePage)
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
salaire(){
  this.navCtrl.setRoot(SalairePage)
}

}
