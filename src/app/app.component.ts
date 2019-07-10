import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { BlankPage } from '../pages/blank/blank';
import { MenuPage } from '../pages/menu/menu';
import { ProduitPage } from '../pages/produit/produit';
import { EntrepotPage } from '../pages/entrepot/entrepot';
import { StockPage } from '../pages/stock/stock';
import { DevisPage } from '../pages/devis/devis';
import { EmployeurPage } from '../pages/employeur/employeur';
import { RessourcesPage } from '../pages/ressources/ressources';
import { BonSortiePage } from '../pages/bon-sortie/bon-sortie';
import { BarcodePage } from '../pages/barcode/barcode';
import { ParamPage } from '../pages/param/param';
import { ReservationPage } from '../pages/reservation/reservation';
import { SocietePage } from '../pages/societe/societe';
import { UploadPage } from '../pages/upload/upload';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = SocietePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

