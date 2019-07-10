import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BlankPage } from '../pages/blank/blank';
import { MenuPage } from '../pages/menu/menu';
import { ProduitPage } from '../pages/produit/produit';
import { NgxBarcodeModule } from 'ngx-barcode';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
 
import { UploadPage } from '../pages/upload/upload';
import { FileTransfer } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { Base64 } from '@ionic-native/base64';
import { ProduitProvider } from '../providers/produit/produit';
import { Storage, IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
 
import { StockPage } from '../pages/stock/stock';
import { EntrepotProvider } from '../providers/entrepot/entrepot';
import { EntrepotPage } from '../pages/entrepot/entrepot';
import { StockProvider } from '../providers/stock/stock';
import { DevisProvider } from '../providers/devis/devis';
import { DevisPage } from '../pages/devis/devis';
import { ClientProvider } from '../providers/client/client';
import { ConditionProvider } from '../providers/condition/condition';
import { ModeProvider } from '../providers/mode/mode';
import { DelaiProvider } from '../providers/delai/delai';
import { EmployeurProvider } from '../providers/employeur/employeur';
import { EmployeurPage } from '../pages/employeur/employeur';
import { RessourcesProvider } from '../providers/ressources/ressources';
import { RessourcesPage } from '../pages/ressources/ressources';
import { BonSortieProvider } from '../providers/bon-sortie/bon-sortie';
import { BonSortiePage } from '../pages/bon-sortie/bon-sortie';
import { BarcodePage } from '../pages/barcode/barcode';
import { ParamPage } from '../pages/param/param';
import { ReservationPage } from '../pages/reservation/reservation';
import { ReservationProvider } from '../providers/reservation/reservation';
import { ListereservationPage } from '../pages/listereservation/listereservation';
import { ListeResPage } from '../pages/liste-res/liste-res';
import { ListeResProvider } from '../providers/list-res/list-res';
import { ListesortieProvider } from '../providers/listesortie/listesortie';
import { TvaProvider } from '../providers/tva/tva';

import { SocietePage } from '../pages/societe/societe';
import { SocieteProvider } from '../providers/societe/societe';

import { ListesortiePage } from '../pages/listesortie/listesortie';
import { LoginPage } from '../pages/login/login';
import { SortieCltPage } from '../pages/sortie-clt/sortie-clt';
import { SortieVldPage } from '../pages/sortie-vld/sortie-vld';
import { Printer } from '@ionic-native/printer';
import { PrintPage } from '../pages/print/print';
import { ImageQrcodePage } from '../pages/image-qrcode/image-qrcode';
 
 
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    BlankPage,
 MenuPage,
 ProduitPage,
 UploadPage,
 EntrepotPage,
 StockPage,
 DevisPage,
 EmployeurPage,
 RessourcesPage,
 BonSortiePage,
 BarcodePage,
 ParamPage,
 ReservationPage,
 ListereservationPage,

 SocietePage,
 ImageQrcodePage,
 PrintPage,

 ListesortiePage,
 LoginPage,
 SortieCltPage,
 SortieVldPage

  ],
  imports: [
    
    BrowserModule,
    NgxBarcodeModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    BlankPage,
MenuPage,
ProduitPage,
UploadPage,
EntrepotPage,
 StockPage,
 DevisPage,
 EmployeurPage,
 RessourcesPage,
 BonSortiePage,
 BarcodePage,
 ParamPage,
 ReservationPage,
 ListereservationPage,
 ListesortiePage,
 LoginPage,
 SortieCltPage,
 SortieVldPage,
 SocietePage,
 ImageQrcodePage,
 PrintPage
  ],
  providers: [
 
    FileTransfer,
    File,
    BarcodeScanner,
    StatusBar,
    SplashScreen,
    Base64,

    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProduitProvider,
    EntrepotProvider,
    StockProvider,
    DevisProvider,
    ClientProvider,
    ConditionProvider,
    ModeProvider,
    DelaiProvider,
    EmployeurProvider,
    RessourcesProvider,
    BonSortieProvider,
    ReservationProvider,
    ListeResProvider,
    ListesortieProvider,
    Printer,
    TvaProvider,
    SocieteProvider,
  
  ]
})
export class AppModule {}
