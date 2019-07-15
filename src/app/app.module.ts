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
<<<<<<< HEAD
import { SignupPage } from '../pages/signup/signup';
import { ListeDevisProvider } from '../providers/liste-devis/liste-devis';
=======
import { DemandeCongePage } from '../pages/demande-conge/demande-conge';
import { PointagePage } from '../pages/pointage/pointage';
import { SalairePage } from '../pages/salaire/salaire';
import { AbscencePage } from '../pages/abscence/abscence';
import { AbscenceProvider } from '../providers/abscence/abscence';
import { DemandeCongéProvider } from '../providers/demande-congé/demande-congé';
import { PointageProvider } from '../providers/pointage/pointage';
import { SalaireProvider } from '../providers/salaire/salaire';
>>>>>>> 8fe6ad2786e2c6f56acbf1afc331c1ec8cbcc802
 
 
 
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
 SortieVldPage,
<<<<<<< HEAD
 SignupPage
=======
 DemandeCongePage,
 PointagePage,
 SalairePage,
 AbscencePage,
>>>>>>> 8fe6ad2786e2c6f56acbf1afc331c1ec8cbcc802

  ],
  imports: [
    HttpModule,
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
 PrintPage,
<<<<<<< HEAD
 SignupPage
=======
 DemandeCongePage,
 PointagePage,
 SalairePage,
 AbscencePage,
>>>>>>> 8fe6ad2786e2c6f56acbf1afc331c1ec8cbcc802
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
<<<<<<< HEAD
    ListeDevisProvider,
=======
    AbscenceProvider,
    DemandeCongéProvider,
    PointageProvider,
    SalaireProvider,
  
>>>>>>> 8fe6ad2786e2c6f56acbf1afc331c1ec8cbcc802
  
  ]
})
export class AppModule {}
