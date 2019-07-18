import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModeProvider } from '../../providers/mode/mode';
import { ReglementProvider } from '../../providers/reglement/reglement';

/**
 * Generated class for the ReglementPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-reglement',
  templateUrl: 'reglement.html',
})
export class ReglementPage {
  item: any;
  listMd: any=[];
  client: any;
  date: any;
  compte: any;
  num: any;
  emetteur: any;
  banque: any;
  commentaire: any;
  mode: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public Mdprovider:ModeProvider,public reglement:ReglementProvider) {
    this.item=this.navParams.get('data');
    this.getMd()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReglementPage');
  }
  getMd(){
    this.Mdprovider.get()
    .then(md => {
      this.listMd= md;
      console.log("mode:::::",this.listMd);
    });
 
  }
  add(){
    let credentials={
      societe:this.item.societe,
      date:this.date,
      mode_regl:this.mode,
      cpte_aCrediter:this.compte,
      num_cheque:this.num,
      emetteur:this.emetteur,
      banque:this.banque,
      commentaire:this.commentaire,
      refFacture:this.item.id,
    };

    this.reglement.save(credentials).then((result)=>{
      console.log("info::::",credentials)
      
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(credentials))
    })
  }
}
