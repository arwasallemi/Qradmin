import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastCmp, ToastController } from 'ionic-angular';
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
 role
 passwordShown : boolean = false;

 passwordType : string ='password';
    username;
    email;
    listsociete: any;
    password;
  
    soc: any;
  constructor(public navCtrl: NavController,    public providerSociete : SocieteProvider, private toast : ToastController,
     public navParams: NavParams,public crudProvider:CrudLoginProvider,public httpClient: HttpClient) {
    this.getsociete()
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }
  togglePassword() {
    if(this.passwordShown) {
  this.passwordShown = false;
  this.passwordType = 'password';
    }
    else {
      this.passwordShown = true;
  this.passwordType = 'text';
    }
    
    
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
      role : this.role,
    };

    this.crudProvider.saveUser(credentials).then((result)=>{
      console.log("info::::",credentials)
      this.navCtrl.setRoot(HomePage)
      console.log(result)
      let toast = this.toast.create({
        message: 'Informations were added successfully',
        duration: 3000,
        position: 'top'
      });
      
    
      toast.present();
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(credentials))
      alert("Wrong credentials ! try again");
    })
    
   
   }
   return(){
     this.navCtrl.setRoot(HomePage)
   }
   
}
