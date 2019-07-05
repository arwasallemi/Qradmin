import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DelaiProvider } from '../../providers/delai/delai';
import { ConditionProvider } from '../../providers/condition/condition';
import { ModeProvider } from '../../providers/mode/mode';

/**
 * Generated class for the ParamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-param',
  templateUrl: 'param.html',
})
export class ParamPage {
  list: any;
  listmd: any;
  listcd: any;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public Delai:DelaiProvider,
     public Mode:ModeProvider,
     public Condition:ConditionProvider,
     ) {
       this.getDelai();
       this.getCondition();
       this.getMode();
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
}
