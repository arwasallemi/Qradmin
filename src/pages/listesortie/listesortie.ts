import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ListesortieProvider } from '../../providers/listesortie/listesortie';

/**
 * Generated class for the ListesortiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-listesortie',
  templateUrl: 'listesortie.html',
})
export class ListesortiePage {
  list: any;
 
  item: any;
  listSortie: any=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public provider:ListesortieProvider) {
    this.item=this.navParams.get('item');
    console.log("itemmmmm",this.item);
    this.get()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ListesortiePage');
  }
get(){
  this.provider.get()
  .then(data => {
    this.list = data;
    console.log("list sortie:::::",this.list);
    for(var i=0;i<this.list.length;i++){
      if(this.list[i].bonSortie_id===this.item.id){
       
        this.listSortie.push(this.list[i])
     }
    }
    console.log(" sortie:::::", this.listSortie);
  });
}
}
