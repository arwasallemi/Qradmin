import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';
import { ReservationProvider } from '../../providers/reservation/reservation';
import { ListereservationPage } from '../listereservation/listereservation';
 
 
/**
 * Generated class for the ReservationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-reservation',
  templateUrl: 'reservation.html',
})
export class ReservationPage {
  list: any;
  etat: string;

  constructor( private modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams,
    public providerRes:ReservationProvider) {
      this.getReservation()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReservationPage');
  }
getReservation(){
  this.providerRes.get()
  .then(data => {
    this.list = data;
    console.log("list md:::::",this.list);
  });
}

brouillon(a:any){
  console.log("test test:",a.id)
  this.etat="brouillon";
  this.edit(a.id)
}
valide(a:any){
  console.log("test test:",a.id)
  this.etat="validé"
  this.edit(a.id)
}
cours(a:any){
  console.log("test test:",a.id)
  this.etat="en cours";
  this.edit(a.id)
  
}
edit(a){
  console.log("edit");
  let credentials = {

     status:this.etat
     
    };
  this.providerRes.edit(a,credentials);
  this.navCtrl.setRoot(ReservationPage)
 }
 delete(a){
  console.log("delete",a);
  this.providerRes.delete(a);
  this.navCtrl.setRoot(ReservationPage)
 }
 show(a){
  let modal = this.modalCtrl.create(ListereservationPage, { item:a});
  modal.present();
  console.log("res:",a);
 }
}
