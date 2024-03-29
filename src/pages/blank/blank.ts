import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ProduitPage } from '../produit/produit';

/**
 * Generated class for the BlankPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-blank',
  templateUrl: 'blank.html',
})
export class BlankPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BlankPage');
  }
produit(){
  this.navCtrl.setRoot(ProduitPage)
}
home(){
  this.navCtrl.setRoot(BlankPage)
}
}
