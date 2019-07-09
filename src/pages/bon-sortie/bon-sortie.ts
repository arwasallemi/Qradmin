import { Component } from '@angular/core';
import { NavController, NavParams,ModalController } from 'ionic-angular';
import { BonSortieProvider } from '../../providers/bon-sortie/bon-sortie';
import { ListesortiePage } from '../listesortie/listesortie';
import { ListesortieProvider } from '../../providers/listesortie/listesortie';

/**
 * Generated class for the BonSortiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-bon-sortie',
  templateUrl: 'bon-sortie.html',
})
export class BonSortiePage {
  list: any;
  etat: any;
  item={
etat:'',
id:'',
dateSortie:'',
dateRetour:'',
dateEvenement:'',
adresse_livraison:'',
transporteur_nom:'',
transporteur_tel:'',
matricule:'',
evenement:'',
equipe_name:'',
created_at:'',
updated_at:''
}
  listSortie: any;
  listS: any;
  listrecherche: any;
  
  constructor(public providerSortie:ListesortieProvider,public navCtrl: NavController, 
    public navParams: NavParams,public provider:BonSortieProvider,
    public modalCtrl:ModalController) {
    this.get();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BonSortiePage');
   
  }
  getSortie(){
    this.providerSortie.get()
    .then(datast => {
      this.listSortie = datast;
      console.log("list sortie:::::",this.list);
      for(var i=0;i<this.listSortie.length;i++){
        if(this.listSortie[i].bonSortie_id===this.item.id){
         
          this.listS.push(this.listSortie[i])
       }
      }
      console.log(" sortie:::::", this.listSortie);
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
  get(){
    this.provider.loadBonsortie()
    .then(data => {
      this.list= data;
      this.listrecherche=data;
      console.log("list:::::",this.list);
    });
    
  }
  edit(a){
    console.log("edit");
    let credentials = {
  
       etat:this.etat
       
      };
    this.provider.edit(a,credentials);
    this.navCtrl.setRoot(BonSortiePage)
   }
   delete(a){
    console.log("delete",a);
    this.provider.delete(a);
    this.navCtrl.setRoot(BonSortiePage)
   }
   show(a){
    let modal = this.modalCtrl.create(ListesortiePage, { item:a});
    modal.present();
    console.log("res:",a);
   }
   //////////////////recherche
   initializeItems(): void {
    this.list = this.listrecherche;
  }
  getItems(searchbar) {
    // Reset items back to all of the items
    this.initializeItems();
  
    // set q to the value of the searchbar
    var q = searchbar.srcElement.value;
  
  
    // if the value is an empty string don't filter the items
    if (!q) {
      return;
    }
  
    this.list = this.list.filter((v) => {
      if(v.etat && q) {
        if (v.etat.toLowerCase().indexOf(q.toLowerCase()) > -1) {
          return true;
        }
        return false;
      }
    });
  
    console.log(q, this.list.length);
  
  }
}
