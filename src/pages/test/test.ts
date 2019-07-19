import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CrudProvider } from '../../providers/crud/crud';
import { HttpClient } from '@angular/common/http';
import { HomePage } from '../home/home';
import { CrudLoginProvider } from '../../providers/crudLogin/crud';
import { SocieteProvider } from '../../providers/societe/societe';
/**
 * Generated class for the TestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {
  users:any;
 
    username;
    email;
    listsociete: any;
    password;
  
    soc: any;
  constructor(public navCtrl: NavController,    public providerSociete : SocieteProvider,
     public navParams: NavParams,public crudProvider:CrudLoginProvider,public httpClient: HttpClient) {
    this.getsociete()
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  getsociete(){
    this.providerSociete.loadsociete()
    .then(data => {
      this.listsociete = data;
      console.log("listsociete:::::",this.listsociete);
     this.soc = this.listsociete[0]
    });
  }
  getData() {
    this.crudProvider.getUsers()
    .then(data => {
      this.users = data;
      console.log("users:::::",this.users);
    });
  }
  insertData(){
    let credentials = {
      username: this.username,
      email: this.email,
      password: this.password,
     
    };

    this.crudProvider.saveUser(credentials).then((result)=>{
      console.log("info::::",credentials)
      this.navCtrl.setRoot(HomePage)
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(credentials))
    })
    
   
   }
   
}
