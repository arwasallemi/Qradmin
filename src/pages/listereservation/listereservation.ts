import { Component } from '@angular/core';
import { NavController, NavParams, IonicPage } from 'ionic-angular';
import { ListeResProvider } from '../../providers/list-res/list-res';
import { ProduitProvider } from '../../providers/produit/produit';
import { StockProvider } from '../../providers/stock/stock';
import { ListesortieProvider } from '../../providers/listesortie/listesortie';
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
import { StockPage } from '../stock/stock';
import { EntrepotPage } from '../entrepot/entrepot';
import { RessourcesPage } from '../ressources/ressources';
import { ReservationPage } from '../reservation/reservation';

/**
 * Generated class for the ListereservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 
@Component({
  selector: 'page-listereservation',
  templateUrl: 'listereservation.html',
})
export class ListereservationPage {
item:any
  list: any=[];
  listres: any=[];
  listprdt: any=[];
  prdt: any=[];
  libelle: any;
  produit: any;
  obj: any=[];
  out: any=[];
  ok: boolean;
  reverse: any[];
  liststock: any=[];
  listestockfinale: any=[];
  somme: any=0;
  reversestock: any[];
  outsomme: any[];
  outref: any[];
  reverseref: any[];
  listsortie: any=[];
  retour: any=[];
  cleanretour: any[];
  clear: any[];
  sum: any;
  sortieref: any=[];
  sortiereclean: any[];
  idlist:any=[]
  reflist: any=[];
  st: number;
 
  constructor(public navCtrl: NavController, public navParams: NavParams,
    
    public listeprovider:ListeResProvider,
    public sortie:ListesortieProvider,
    public provider:ProduitProvider,
    public stock:StockProvider) {
    this.item=this.navParams.get('item');
    console.log("itemmmmm",this.item);
    this.getliste();
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListereservationPage');
  }
getliste(){
  /////////liste complete
  this.listeprovider.get()
  .then(data => {
    this.list = data;
    console.log("list reservation:::::",this.list);
      ////////////filtrage by reservation_id
  for(var i=0;i<this.list.length;i++){
    if(this.list[i].reservation_id==this.item.id){
      // console.log("reservation_id:",this.list[i].reservation_id)
      // console.log("id:",this.list[i].id)
this.listres.push(this.list[i]);

    }
    console.log("listres:",this.listres)
    ///////////////recherche ref produit
    this.provider.get()
    .then(data => {
      this.listprdt = data;
      console.log("list produits:::::",this.listprdt);
      for( var k=0;k<this.listres.length;k++){ 
        for(var j=0;j<this.listprdt.length;j++){ 
          this.produit=this.listres[k].produit;
        
          this.libelle=this.listprdt[j].libelle;
         if(this.produit.match(this.libelle)===null){
          
            }else  {
              console.log("prdt:",this.libelle,"-----------res:",this.produit)

         
              this.prdt.push(this.listprdt[j])
                   ////////////////
     
              
                 
                
                  ////////////////
                  
            }
         
      }
     
  
/////////clean id
    }
    console.log("prdtttt:",this.prdt)
    for(var i=0;i<this.prdt.length;i++){
      this.idlist.push(this.prdt[i].id)
      this.reflist.push(this.prdt[i].libelle)
      console.log("----reflisttttt-----",this.reflist)
      console.log("listeprdt:", this.idlist)
    }
    /////////////clean ref
 
 




//this.reverseref=this.cleanArray(this.reflist,this.outref).reverse()
console.log("*****ref******",this.reverseref)
/////////////recherche stock
this.stock.get()
.then(st => {
  this.liststock = st;
  console.log("*****reverse******",this.idlist) 
  console.log("list stock:::::",this.liststock);
  for(var j=0;j<this.idlist.length;j++){
    this.somme=0;
    for(var i=0;i<this.liststock.length;i++){
    
    if(this.liststock[i].produit.match(this.idlist[j])===null){
/////////////////
    }else{
     
      this.somme=this.somme+this.liststock[i].qte
      console.log("somme:::::", this.somme);  
      
    }
 
   
    }
 
      this.listestockfinale.push(this.somme)
 
    
    console.log("list stock finale:::::", this.listestockfinale);  
    this.reversestock=this.removeDups(this.listestockfinale)

 for(var i=0;i<this.listres.length;i++){
   this.reversestock[i]=this.listestockfinale[i]
 }
    console.log("list stock finale clean:::::", this.reversestock); 
  }
///////////////////recherche bon sortie

this.sortie.get().then(sor => {
  this.listsortie = sor;
  console.log("list bon sortie:::::", this.listsortie); 
   for(var j=0;j<this.reflist.length;j++){
     this.sum=0;
     
    for( var i=0;i<this.listsortie.length;i++){
      this.compareDate(this.listsortie[i].dateRetour,this.item.date_debut_evenement)
    //  console.log("sssssst:",this.st)
if(this.listsortie[i].ref.match(this.reflist[j])===null){

}else{
  if(this.st==0){
    console.log("sortie ref:",this.listsortie[i].ref,"-----------ref:",this.reflist[j],"sssssst:",this.st)
    console.log("date retour::::",this.listsortie[i].dateRetour)
    this.sum=this.sum+this.listsortie[i].qte
        console.log("sum:::::", this.sum); 
  }

    
      ///////////////filtrage date
}

    }
    this.sortieref.push(this.sum)
    console.log("tailleeeeee:",this.listres.length)
    this.sortiereclean=this.removeDups(this.sortieref) ;
    console.log("list stock retour:::::", this.sortieref); 
  
   }
   for(var i=0;i<this.listres.length;i++){
    this.sortiereclean[i]=this.sortieref[i]
  }
});
 });
    });
  
  }
 
  });

}
compareDate(Retour,DateDebut){
 
 
        //  var  newdate = year + "/" + month + "/" + day;
    //  console.log(newdate,"newdate")
    //////////////////
      console.log(Retour,"dateRetour")
    
      var dateRetour = new Date(Retour)
      console.log(dateRetour,"dateobj")
      var month = dateRetour.getUTCMonth() + 1; //months from 1-12
      console.log(month,"month")
      var day = dateRetour.getUTCDate() + 1 ;
      console.log(day,"day")
      var year = dateRetour.getUTCFullYear();
      console.log(year,"year")
       var  newdate = year + "/" + month + "/" + day;
     console.log(newdate,"newdate")
      ///////////////////
      console.log(DateDebut,"DateDebutEvenement")
    
      var dateDebutEvenement = new Date(DateDebut)
      console.log(dateDebutEvenement,"dateDebutEvenement")
      var monthEv = dateDebutEvenement.getUTCMonth() + 1; //months from 1-12
      console.log(monthEv,"monthEv")
      var dayEv = dateDebutEvenement.getUTCDate() + 1;
      console.log(dayEv,"dayEv")
      var yearEv = dateDebutEvenement.getUTCFullYear();
      console.log(yearEv,"yearEv")
       var  newdateEv = yearEv + "/" + monthEv + "/" + dayEv;
     console.log(newdateEv,"newdateEv")
  
  
  ////////////////////////////
     if( year > yearEv)
     {
       dateRetour > dateDebutEvenement
       console.log( "res1")
  
     }
       if ( (year ==  yearEv) && ( month > monthEv)  )
     {
      
      
        dateRetour > dateDebutEvenement
        console.log("res2")
     
  
  
    }
   if ( (year ==  yearEv) && ( month ==  monthEv) && (day > dayEv) )
    
     
     {
      dateRetour > dateDebutEvenement
      console.log("res3")
     }
       
     if ( dateRetour > dateDebutEvenement )
     {
      this.st = 1
     }
     
     else this.st =0
  
    
   console.log("stttttttttttttttt:::",this.st)
  
  
}
cleanArray(a,out=[]) {
  var i, j, len = a.length, obj =[];
  for (i = 0; i < len; i++) {
    obj[a[i]] = 0;

  }
  for (j in obj) {
    out.push(j);
   
  }
  console.log(out,"outtttttttt")
  return out;
}

removeDups(names) {
  let unique = {};
  names.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
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
stockk(){
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
