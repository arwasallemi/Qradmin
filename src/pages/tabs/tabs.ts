import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TestPage } from '../test/test';
import { DashboardPage } from '../dashboard/dashboard';
import { SitePage } from '../site/site';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TabsPage');
  }
  navigation()
  {
  console.log("hello")
  this.navCtrl.setRoot(TestPage)
  }
  site(){
    this.navCtrl.setRoot(SitePage)
  }

}
