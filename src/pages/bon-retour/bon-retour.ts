import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BonRetourProvider } from '../../providers/bon-retour/bon-retour';

/**
 * Generated class for the BonRetourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bon-retour',
  templateUrl: 'bon-retour.html',
})
export class BonRetourPage {
  list: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public retourprovider:BonRetourProvider) {
      this.get()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonRetourPage');
  }
  get(){
    this.retourprovider.loadBonsortie()
    .then(data => {
      this.list= data;
      console.log("list:::::",this.list);
    });
    
  }

}
