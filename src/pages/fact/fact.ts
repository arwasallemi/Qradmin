import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListesortieProvider } from '../../providers/listesortie/listesortie';
import { ProduitProvider } from '../../providers/produit/produit';
import { FactureProvider } from '../../providers/facture/facture';
import { ListefactureProvider } from '../../providers/listefacture/listefacture';
import { ConditionProvider } from '../../providers/condition/condition';
import { ModeProvider } from '../../providers/mode/mode';
import { SocieteProvider } from '../../providers/societe/societe';
import { Printer, PrintOptions } from '@ionic-native/printer';

/**
 * Generated class for the FactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fact',
  templateUrl: 'fact.html',
})
export class FactPage {
  datafacture: { ref: any; societe: any; type: any; remise: any; date: any; condition_regl: any; date_limite_reglement: any; mode_regl: any; cpte_bancaire: any; montant_Ht: string; montant_tva: string; montant_ttc: number; etat: any; projet: any; incoterms: any; };
  listCdt: any;
  listMd: any;
  imagelist: any;
  title: string;
  [x: string]: any;
  item: any;
  list: any;
  listSortie: any=[];
  Sortie: any=[];
  listPdt: any;
  ttc: any=0;
  remise: any=0;
  prixfinal: number=0;
  listDvs: any;
  length: any;
  ref: any;
  type: any;
  date: any;
  condition: any;
  mode: any;
  compte: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public liste:ListesortieProvider,public facture:FactureProvider,
    public produitProvider:ProduitProvider,public listeprovider:ListefactureProvider,
    public Cdtprovider:ConditionProvider,
    public Mdprovider:ModeProvider,
    private printer: Printer,private societe:SocieteProvider) {
    this.item=this.navParams.get('bon');
    this.get()
    this.getCdt()
    this.getMd()
    this.getfacture();
    this.loadImage()
  }
  print(){
    this.printer.isAvailable().then(this.onSuccessLoad, this.onErrorLoad);

  }
 
  
  loadImage(){

    this.societe.loadimageSociete()
    .then(data => {
      this.imagelist = data;
      console.log(this.imagelist)
    });
  
  }


  onSuccessLoad(){
    this.title="F.proforma"
    let options: PrintOptions = {
        name: 'MyDocument',
        printerId: 'My Printer XYZ',
        duplex: true,
        landscape: true,
        grayscale: true
      };


    this.printer.print("http://google.com",options).then(this.onSuccessPrint, 
    this.onErrorPrint); 
  }

  onErrorLoad(){
    alert('Error : printing is unavailable on your device ');
  }

  onSuccessPrint(){
    alert("printing done successfully !");
  }

  onErrorPrint(){
    alert("Error while printing !");
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad FactPage');
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
  Confirmer(){
    this.title="Bon de vente"
    this.add();
for(var i=0;i<this.Sortie.length;i++){
  let facturedata = {
  produit:this.Sortie[i].produit,
  qte:this.Sortie[i].quantite,
  facture_id:this.length,
  prix_unitaire_HT:this.Sortie[i].prix_location,
  prix_unitaire_TTC:this.Sortie[i].total,   
  };
         
           this.listeprovider.save(facturedata).then((result)=>{
            console.log("devis info::::",facturedata)
            
            console.log(result)
            
          },(err)=>{
            console.log("insert err: "+ err)
            console.log("this.myInfo: "+ JSON.stringify(facturedata))
          })
         
          this.onSuccessLoad()
}}
  add(){
    let credentials = {
      ref:this.ref,
      societe:this.item.nom_client,
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
  get(){
 
    this.liste.get()
    .then(data => {
      this.list = data;
      console.log("list sortie:::::",this.list);
      for(var i=0;i<this.list.length;i++){
        if(this.list[i].bonSortie_id===this.item.id){
         
          this.listSortie.push(this.list[i])
       }
      }
      
      for(var i=0;i<this.listSortie.length;i++){
        let itempdt={
          produit:"",
          prix_location:"",
          quantite:"",
          total :1,
          num:0,
          tva:""
        }
       itempdt.produit=this.listSortie[i].ref
       itempdt.quantite=this.listSortie[i].qte
     
       itempdt.num=this.Sortie.length+1
       this.Sortie.push(itempdt)
      }
      this.produitProvider.get()
      .then(pdt => {
        this.listPdt= pdt;
        console.log("pdt list:::::",this.listPdt);
        for(var i=0;i<this.listPdt.length;i++){
          for(var j=0;j<this.Sortie.length;j++){
        if(this.listPdt[i].libelle==this.Sortie[j].produit){
          this.Sortie[j].prix_location=this.listPdt[i].prix_location_minimale
          this.Sortie[j].tva=this.listPdt[i].tva
         
         // let sorP = parseInt(this.Sortie[j].prix_location)
          //let sorQ =parseInt(this.Sortie[j].quantite)
console.log(this.Sortie[j].total,"sortieeeeeeeeeeee")
 
         this.Sortie[j].total=this.Sortie[j].prix_location*this.Sortie[j].quantite+((this.Sortie[j].prix_location*this.Sortie[j].quantite)/100*this.Sortie[j].tva)
      
     this.ttc=this.ttc+this.Sortie[j].total 
 
       
        }
          }
          console.log(" sortie:::::", this.Sortie);
       
        }
      });
    });

  
  }
  calcul(){
      for(var j=0;j<this.Sortie.length;j++){
        this.Sortie[j].total=this.Sortie[j].prix_location*this.Sortie[j].quantite+((this.Sortie[j].prix_location*this.Sortie[j].quantite)/100*this.Sortie[j].tva)
     
     this.ttc=this.ttc+this.Sortie[j].total
    
        console.log(" total:::::",this.ttc);
       } 
     
  }
  final(){
    this.prixfinal=this.ttc-this.remise
   } 
}
