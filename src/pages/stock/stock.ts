import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EntrepotProvider } from '../../providers/entrepot/entrepot';
import { ProduitProvider } from '../../providers/produit/produit';
import { StockProvider } from '../../providers/stock/stock';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,public providerEntrepot:EntrepotProvider,
    public providerProduit:ProduitProvider,public stockprovider:StockProvider) {
this.listEnt=[]
this.listPrdt=[]
    this.selectEntrepot();
    this.selectProduit();
    this.get();
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
}
