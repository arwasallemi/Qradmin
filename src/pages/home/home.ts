import { Component } from '@angular/core';
import { IonicPage, NavController,AlertController, NavParams  } from 'ionic-angular';


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



  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthProvider ,
    public providerSociete : SocieteProvider,
    public alertCtrl: AlertController ,
  
  ) {
    this.getsociete()
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
           
        }, (err) => {
     
            console.log(err);
            this. errorFunc('Wrong credentials ! try again')
            console.log("credentials: "+JSON.stringify(credentials))
            
        });
 
      }
      
   }
   else{
    
    this. errorFunc('Please put a vaild password !  for ex:(123456)')
   
    }
 
 

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
