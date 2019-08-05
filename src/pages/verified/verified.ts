import { Component } from '@angular/core';

import { IonicPage, NavController,AlertController, NavParams, ToastController  } from 'ionic-angular';


import { AuthProvider } from '../../providers/auth/auth';
import { TestPage } from '../test/test';
import { SocietePage } from '../societe/societe';
import { SocieteProvider } from '../../providers/societe/societe';

/**
 * Generated class for the VerifiedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verified',
  templateUrl: 'verified.html',
})
export class VerifiedPage {
  email:string = '';
  password:string = '';

  errorMsg:string;
  listsociete: any;
  soc: any;
  nameuser



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider ,
    public providerSociete : SocieteProvider,
    public alertCtrl: AlertController , private toast : ToastController,
  
  ) {
    this.getsociete()
   this.log()
  }
  getsociete(){
    this.providerSociete.loadsociete()
    .then(data => {
      this.listsociete = data;
      console.log("listsociete:::::",this.listsociete);
     this.soc = this.listsociete[0]
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


  errorFunc(message){
    let alert = this.alertCtrl.create({
      title: 'Warining!',
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }




  myLogIn(){
 
    if (this.email.trim() !==''    ) {    
      
      console.log(this.email.trim() + "   " + this.password.trim() )
       
      if (this.password.trim()  === '') {
        this.errorFunc('Please put your password')
 
      }else{
 
        let credentials = {
          email: this.email,
            password: this.password
        };
 
        
         this.authService.save(credentials).then((result) => {
            console.log("login result:",result);
         this.navCtrl.setRoot(SocietePage);
         let toast = this.toast.create({
          message: 'Welcome !!',
          duration: 3000,
          position: 'top'
        });
        
      
        toast.present();
        
        window.localStorage.setItem("password", this.password);
        console.log(window.localStorage.setItem("password",this.password ))
        window.localStorage.setItem("username", this.email);
        console.log(window.localStorage.setItem("username", this.email))
        window.localStorage.getItem("username");
        console.log(window.localStorage.getItem("username"))
        window.localStorage.getItem("password");
        console.log(window.localStorage.getItem("password"))

        }, (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            alert("Wrong credentials ! try again");
   
        });
 
      }
      
   }
   else{
    
    this. errorFunc('Please put a vaild password !  for ex:(123456)')
   
    }
 
 

}



async log(){

  
  window.localStorage.getItem("username");
  console.log(window.localStorage.getItem("username"))
  window.localStorage.getItem("password");
  console.log(window.localStorage.getItem("password"))

   // this.rootPage = AccueilPage
 


    this.navCtrl.setRoot(SocietePage);

}

myLogOut(){
  //this.authService.logout();
  this.navCtrl.setRoot(TestPage)
}
mysignUp(){
  //this.authService.logout();
  this.navCtrl.setRoot(TestPage)
}






}
