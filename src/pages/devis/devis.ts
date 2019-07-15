import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { min } from 'rxjs/operator/min';
import { ClientProvider } from '../../providers/client/client';
import { ConditionProvider } from '../../providers/condition/condition';
import { ModeProvider } from '../../providers/mode/mode';
import { DelaiProvider } from '../../providers/delai/delai';
import { DevisProvider } from '../../providers/devis/devis';
import { ProduitProvider } from '../../providers/produit/produit';
import { TvaProvider } from '../../providers/tva/tva';
import { IonicStorageModule } from '@ionic/storage';
import { Storage } from '@ionic/storage';
import { ListeDevisProvider } from '../../providers/liste-devis/liste-devis';
/**
 * Generated class for the DevisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-devis',
  templateUrl: 'devis.html',
})
export class DevisPage {
date=new Date();
//dateliv=new Date().toISOString();
min;
max;

  listClt: any;
  client: any;
  listCdt: any;
  condition: any;
  prix
  duree: any;
  listMd: any;
  mode: any;
  note:any="";
  listDl: any;
  delai: any;
  produit
  dateliv: any;
  deteLivraison= new Date();
  listDVS: any;
  listDvs: any;
  listPdt: any;
  prix_location: any=0;
  listTva: any=[];
  
 
  total=0;
  quantite: any;
  tva: number;
  length: any;
  listeDevis:any=[]
  listD: any=[];
  ttc=0;
  remise=0
  prixfinal: any=0;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    public TvaProvider:TvaProvider,
    public Cltprovider:ClientProvider,
    public Cdtprovider:ConditionProvider,
    public Mdprovider:ModeProvider,
    public Dlprovider:DelaiProvider,
    public Dvsprovider:DevisProvider,
    private produitProvider:ProduitProvider,
    private ListeProvider:ListeDevisProvider,
  
    private storage: Storage
    ) {
    //this.listeDevis=this.storage.get("listeDevis")
    this.max=new Date().getUTCFullYear()+5;
    this.getClt();
    this.getCdt();
    this.getMd();
    this.getdl();
    this.get();
    this.getProduit();
    this.getTVA();
    this.getliste()
  
  }
 
  ionViewDidLoad() {
    console.log('ionViewDidLoad DevisPage');
    var y = document.getElementById("form2");
    y.style.display = "none";
    var w = document.getElementById("form4");
    w.style.display = "none";
    var e = document.getElementById("form5");
    e.style.display = "none";
  }
 final(){
this.prixfinal=this.ttc-this.remise
  }
  ajouter(){
    //this.listeDevis= this.storage.get("listeDevis")
   let itempdt={
      produit:"",
      prix_location:"",
      quantite:"",
      total:0
    }
  itempdt.prix_location=this.prix_location,
  itempdt.produit=this.produit,
  itempdt.quantite=this.quantite
  itempdt.total=this.total
    console.log("itempdt:::",itempdt)
    this.listeDevis.push(itempdt)
    console.log("listeeeeeee:::",this.listeDevis)
    this.ttc=this.ttc+this.total
  // this.storage.set("listeDevis",this.listeDevis)
    //this.navCtrl.setRoot(DevisPage)
   // this.details()
  }
  Confirmer(){
    this.add();
for(var i=0;i<this.listeDevis.length;i++){
  let devisdata = {
  produit:this.listeDevis[i].produit,
  qte:this.listeDevis[i].quantite,
  devis_id:this.length,
  prix_unitaire_HT:this.listeDevis[i].prix_location,
  prix_total_TTC:this.total,   
  };
         
           this.ListeProvider.save(devisdata).then((result)=>{
            console.log("devis info::::",devisdata)
            
            console.log(result)
            
          },(err)=>{
            console.log("insert err: "+ err)
            console.log("this.myInfo: "+ JSON.stringify(devisdata))
          })
}
  }
  
  getliste(){
    this.ListeProvider.get()
    .then(liste => {
      this.listD= liste;
      console.log("listD:::::",this.listD);
    
    });
  }
  getduree(){
    console.log("duree:::::",this.duree);
  }
  back(){
    var x = document.getElementById("form1");


    x.style.display = "block";

var y = document.getElementById("form2");

    y.style.display = "none";

    var z = document.getElementById("form3");


    z.style.display = "block";

var w = document.getElementById("form4");

    w.style.display = "none";
    var e = document.getElementById("form5");

    e.style.display = "none";
  }
  details(){
    var x = document.getElementById("form1");
      x.style.display = "none"
      ////////
  var y = document.getElementById("form2");
  y.style.display = "block";
  ////////////////
  var z = document.getElementById("form3");
   z.style.display = "none";
/////////////
var w = document.getElementById("form4");
w.style.display = "block";
//////////
/////////////
var e = document.getElementById("form5");
e.style.display = "block";
  }
  getProduit(){
    this.produitProvider.get()
    .then(pdt => {
      this.listPdt= pdt;
      console.log("pdt list:::::",this.listPdt);
    });
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
console.log("produitttt:",this.listPdt[i].libelle)
console.log("prixx:",this.prix_location,"prdt:",this.produit,"list libelle::",this.listPdt[i].libelle)
}
}
  }
  selectTVA(){
    
  }
  calcul(){
    this.total=this.quantite*this.prix_location+((this.quantite*this.prix_location)/100)*this.tva
  }
  getTVA(){
    this.TvaProvider.get()
    .then(tva => {
      this.listTva= tva;
      console.log("tva:::::",this.listTva);
    });
    
  }
  get(){
    this.Dvsprovider.get()
    .then(dvs => {
      this.listDvs= dvs;
      console.log("dvs:::::",this.listDvs);
      for(var i=0;i<this.listDvs.length;i++){
        this.length=this.listDvs[i].id+1
      }
      console.log("length:::::",this.length);
    });
  }
getClt(){
  this.Cltprovider.get()
  .then(info => {
    this.listClt= info;
    console.log("client:::::",this.listClt);
  });
  console.log("client:::::",this.client);
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
getdl(){
  this.Dlprovider.get()
  .then(dl => {
    this.listDl= dl;
    console.log("mode:::::",this.listDl);
  });
  console.log("mode:::::",this.listDl);
}
edit(a){
  console.log("edit");
  let credentials = {
    libelle:"update",
     
     
    };
  this.Dvsprovider.edit(a,credentials);
  this.navCtrl.setRoot(DevisPage)
 }
 delete(a){
  console.log("delete");
  this.Dvsprovider.delete(a);
  this.navCtrl.setRoot(DevisPage)
 }
add(){
  let credentials = {
 date:this.date,
 duree:this.duree,
 condition:this.condition,
 mode:this.mode,
 delai:this.delai,
 note:this.note,
 client:this.client,
 deteLivraison:this.deteLivraison,
 remise:this.remise
         
        };
      
        this.Dvsprovider.save(credentials).then((result)=>{
          console.log("info::::",credentials)
          
          console.log(result)
          
        },(err)=>{
          console.log("insert err: "+ err)
          console.log("this.myInfo: "+ JSON.stringify(credentials))
        })
      
      
       
    }
}

