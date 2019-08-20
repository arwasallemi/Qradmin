import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule , Component} from '@angular/core';
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

import { SignupPage } from '../pages/signup/signup';
import { ListeDevisProvider } from '../providers/liste-devis/liste-devis';






import { DemandeCongePage } from '../pages/demande-conge/demande-conge';
import { PointagePage } from '../pages/pointage/pointage';
import { SalairePage } from '../pages/salaire/salaire';
import { AbscencePage } from '../pages/abscence/abscence';
import { AbscenceProvider } from '../providers/abscence/abscence';
import { PointageProvider } from '../providers/pointage/pointage';
import { SalaireProvider } from '../providers/salaire/salaire';
import { ImprimerDevisPage } from '../pages/imprimer-devis/imprimer-devis';
import { BonRetourPage } from '../pages/bon-retour/bon-retour';
import { BonRetourProvider } from '../providers/bon-retour/bon-retour';
import { ListeretourProvider } from '../providers/listeretour/listeretour';
import { ListeRetourPage } from '../pages/liste-retour/liste-retour';
import { FacturePage } from '../pages/facture/facture';
import { FactureProvider } from '../providers/facture/facture';
import { ListefactureProvider } from '../providers/listefacture/listefacture';
import { ImprimerfacturePage } from '../pages/imprimerfacture/imprimerfacture';
import { ListeFacturePage } from '../pages/liste-facture/liste-facture';
import { ReglementPage } from '../pages/reglement/reglement';
import { ReglementProvider } from '../providers/reglement/reglement';
import { FactPage } from '../pages/fact/fact';
import { TestPage } from '../pages/test/test';
import { CrudLoginProvider } from '../providers/crudLogin/crud';
import { AuthProvider } from '../providers/auth/auth';
import { VerifiedPage } from '../pages/verified/verified';
import { SitePage } from '../pages/site/site';
import { TabsPage } from '../pages/tabs/tabs';
import { TempPage } from '../pages/temp/temp';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { IconsPage } from '../pages/icons/icons';
import { MapPage } from '../pages/map/map';
import { NotificationsPage } from '../pages/notifications/notifications';
import { RtlPage } from '../pages/rtl/rtl';
import { TablesPage } from '../pages/tables/tables';
import { TypographyPage } from '../pages/typography/typography';
import { UpgradePage } from '../pages/upgrade/upgrade';
import { UserPage } from '../pages/user/user';
import { demandeCongeProvider } from '../providers/demande-congé/demande-congé';

 
 
 
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
 SignupPage,
 DemandeCongePage,
 TestPage,
 HomePage,
 PointagePage,
 SalairePage,
 AbscencePage,
ImprimerDevisPage,
BonRetourPage,
ListeRetourPage,
FacturePage,
ImprimerfacturePage,
ListeFacturePage,
ReglementPage,
SitePage,
FactPage,
TabsPage,
DashboardPage,
IconsPage,
MapPage,
NotificationsPage,
RtlPage,
TablesPage,
TypographyPage,
UpgradePage,
UserPage,

VerifiedPage,
SitePage,
TabsPage,
TempPage
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
 DemandeCongePage,
 PointagePage,
 SalairePage,
 AbscencePage,
 ImprimerDevisPage,
 BonRetourPage,
 ListeRetourPage,
 FacturePage,
 ImprimerfacturePage,
 ListeFacturePage,
 ReglementPage,
 FactPage,
 SitePage,
 TestPage,
 VerifiedPage,
 SitePage,
 TabsPage,
 TempPage
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
    ListeDevisProvider,
    AbscenceProvider,
    demandeCongeProvider,
    PointageProvider,
    SalaireProvider,
    BonRetourProvider,
    ListeretourProvider,
    FactureProvider,
    ListefactureProvider,
    ReglementProvider,
    CrudLoginProvider,
    AuthProvider,

  
  ]
})
export class AppModule {}
