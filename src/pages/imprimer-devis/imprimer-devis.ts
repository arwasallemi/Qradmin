import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ImprimerDevisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-imprimer-devis',
  templateUrl: 'imprimer-devis.html',
})
export class ImprimerDevisPage {
  dataDevis: any;
  liste: any=[];
  ttc: any;
  prixfinal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.dataDevis=this.navParams.get('dataDevis');
    this.liste=this.navParams.get('liste');
    this.ttc=this.navParams.get('ttc');
    this.prixfinal=this.navParams.get('prixfinal');
    console.log("dataDevis:",this.dataDevis)
    console.log("liste:",this.liste)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImprimerDevisPage');
  }

}
