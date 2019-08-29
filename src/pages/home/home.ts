import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams, ToastController  } from 'ionic-angular';


import { AuthProvider } from '../../providers/auth/auth';
import { TestPage } from '../test/test';
import { SocietePage } from '../societe/societe';
import { SocieteProvider } from '../../providers/societe/societe';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  email:string = '';
  password:string = '';

  errorMsg:string;
  listsociete: any;
  soc: any;
  nameuser
  passwordShown : boolean = false;

  passwordType : string ='password';

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider ,
    public providerSociete : SocieteProvider,
    public alertCtrl: AlertController , private toast : ToastController,
  
  ) {
    this.getsociete()
    
    this.email = window.localStorage.getItem("username");
    console.log("emaiiiiiiiiil:",window.localStorage.getItem("username"))
  this.password =  window.localStorage.getItem("password");
    console.log("ppppppp",window.localStorage.getItem("password"))
 //   this.log()
 this.log()
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
        
                   
        window.localStorage.setItem("password", this.password);
        console.log(window.localStorage.setItem("password",this.password ))
        window.localStorage.setItem("username", this.email);
        console.log(window.localStorage.setItem("username", this.email))

        toast.present();
    

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
    

        });

      
      
   
  




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
