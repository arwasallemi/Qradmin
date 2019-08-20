import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SocietePage } from '../pages/societe/societe';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  

  rootPage:any = HomePage;





  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
     // this.log()
    });


  }
  async log(){
   
  let x = window.localStorage.getItem("username");
    console.log(window.localStorage.getItem("username"))
   let y =  window.localStorage.getItem("password");
    console.log(window.localStorage.getItem("password"))
  this.rootPage= SocietePage

  if( window.localStorage.getItem("username") == " " || y == " ")
  {
    this.rootPage= HomePage
  }

 }
}

