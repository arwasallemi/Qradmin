import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { min } from 'rxjs/operator/min';
import { ClientProvider } from '../../providers/client/client';
import { ConditionProvider } from '../../providers/condition/condition';
import { ModeProvider } from '../../providers/mode/mode';
import { DelaiProvider } from '../../providers/delai/delai';
import { DevisProvider } from '../../providers/devis/devis';

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
  duree: any;
  listMd: any;
  mode: any;
  note:any="";
  listDl: any;
  delai: any;
  dateliv: any;
  deteLivraison= new Date();
  listDVS: any;
  listDvs: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    
    public Cltprovider:ClientProvider,
    public Cdtprovider:ConditionProvider,
    public Mdprovider:ModeProvider,
    public Dlprovider:DelaiProvider,
    public Dvsprovider:DevisProvider,
    
    ) {
    this.max=new Date().getUTCFullYear()+5;
    this.getClt();
    this.getCdt();
    this.getMd();
    this.getdl();
    this.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevisPage');
  }
  getduree(){
    console.log("duree:::::",this.duree);
  }
  get(){
    this.Dvsprovider.get()
    .then(dvs => {
      this.listDvs= dvs;
      console.log("dvs:::::",this.listDvs);
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
         
        };
      
        this.Dvsprovider.save(credentials).then((result)=>{
          console.log("info::::",credentials)
          
          console.log(result)
          
        },(err)=>{
          console.log("insert err: "+ err)
          console.log("this.myInfo: "+ JSON.stringify(credentials))
        })
      
       this.navCtrl.setRoot(DevisPage)
       
    }
}

