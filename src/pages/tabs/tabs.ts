import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Footer } from 'ionic-angular';
import { ProduitProvider } from '../../providers/produit/produit';
import { StockProvider } from '../../providers/stock/stock';
import { EntrepotProvider } from '../../providers/entrepot/entrepot';
import { SocieteProvider } from '../../providers/societe/societe';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  listPrdt: any=[];
  prod: any;
  list: any=[];
  listO: any=[];
  idProd: any;
  entre: any;
  listEnt: any=[];
  dest: any;
  qte: any;
  origineId: any;
  ok: number;
  destId: any;
  qteO: any;
  qteD: any;
  somme: number;
  listsociete: any;
  item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public providerProduit:ProduitProvider,public stockprovider:StockProvider,
    public providerEntrepot:EntrepotProvider,public providerSociete : SocieteProvider) {
 this.ok=0;
 this.somme=0;
 this.selectProduit()
 this.selectEntrepot()
 this.getsociete();
// this.get()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  getsociete(){
    this.providerSociete.loadsociete()
    .then(data => {
      this.listsociete = data;
      console.log("listsociete:::::",this.listsociete);
     this.item = this.listsociete[0]
    });
  }
  selectProduit(){
    this.providerProduit.get()
    .then(info => {
      this.listPrdt= info;
      console.log("produit:::::",this.listPrdt);
    });
 console.log("produit::",this.prod)
 for(var i=0;i<this.listPrdt.length;i++){
  if(this.prod==this.listPrdt[i].ref){
this.idProd=this.listPrdt[i].id;
 
  }
}
this.get()
  }
  get(){
    this.stockprovider.get()
    .then(res => {
      this.list= res;
      console.log("list:::::",this.list);
    });
for(var i=0;i<this.list.length;i++){
  if(this.list[i].produit==this.idProd){
    this.listO.push(this.list[i])
  }

}
console.log("listo::",this.listO)
console.log("entre::",this.entre)
for(var i=0;i<this.listO.length;i++){
  if(this.listO[i].entrepot==this.entre){
this.qte=this.listO[i].qte
console.log("qte::",this.qte)
  }

}
  }
getqte(){
  for(var i=0;i<this.listO.length;i++){
    if(this.listO[i].entrepot==this.entre){
  this.qte=this.listO[i].qte
  this.origineId=this.listO[i].id
  this.qteO=this.listO[i].qte
    }
  
  }
  }
  selectEntrepot(){
    this.providerEntrepot.get()
    .then(data => {
      this.listEnt = data;
      console.log("list:::::",this.listEnt);
    });
    console.log("entrepot:::::",this.dest);
    ///////// si stock existe deja
 
    for(var j=0;j<this.listO.length;j++){
if(this.dest==this.listO[j].entrepot){
 
    console.log("result:::::",this.listO[j].qte);
    this.destId=this.listO[j].id
    this.qteD=this.listO[j].qte
    this.ok=1
  }

 
  } 
  }
  confirmer(){
    if(this.ok==1){
      console.log("edit");
      let credentialsO = {
        qte:this.qteO-this.qte,
        };
      this.stockprovider.edit(this.origineId,credentialsO);
 
      let credentialsD = {
        qte:parseInt(this.qteD)+parseInt(this.qte),
        };
      this.stockprovider.edit(this.destId,credentialsD);
    //  this.navCtrl.setRoot(TabsPage)
    }else{
      let credentialsO = {
        qte:this.qteO-this.qte,
        };
      this.stockprovider.edit(this.origineId,credentialsO);
 
      let credentialsAdd = {
     qte:this.qte,
     produit:this.idProd,
     entrepot:this.dest,
     ref:"refffffffff"
};
            
               this.stockprovider.save(credentialsAdd).then((result)=>{
                 console.log("info::::",credentialsAdd)
                 
                 console.log(result)
                 
               },(err)=>{
                 console.log("insert err: "+ err)
                 console.log("this.myInfo: "+ JSON.stringify(credentialsAdd))
               })
             
             
    }
  }
 
}
