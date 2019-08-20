import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { BlankPage } from '../blank/blank';
import QRCode from 'qrcode';
import { BarcodeScanner, BarcodeScannerOptions } from '@ionic-native/barcode-scanner';

import { ProduitProvider } from '../../providers/produit/produit';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ImageQrcodePage } from '../image-qrcode/image-qrcode';
import { Http } from '@angular/http';
import { TvaProvider } from '../../providers/tva/tva';
import { BonRetourPage } from '../bon-retour/bon-retour';
import { HomePage } from '../home/home';
import { SortieVldPage } from '../sortie-vld/sortie-vld';
import { SortieCltPage } from '../sortie-clt/sortie-clt';
import { BonSortiePage } from '../bon-sortie/bon-sortie';
import { EmployeurPage } from '../employeur/employeur';
import { DevisPage } from '../devis/devis';
import { FacturePage } from '../facture/facture';
import { ListeFacturePage } from '../liste-facture/liste-facture';
import { ParamPage } from '../param/param';
import { SocietePage } from '../societe/societe';
import { StockPage } from '../stock/stock';
import { ListereservationPage } from '../listereservation/listereservation';
import { EntrepotPage } from '../entrepot/entrepot';
import { RessourcesPage } from '../ressources/ressources';
import { ReservationPage } from '../reservation/reservation';
import { SocieteProvider } from '../../providers/societe/societe';


@Component({
  selector: 'page-produit',
  templateUrl: 'produit.html',
})
export class ProduitPage {
  csvData: any[] = [];
  headerRow: any[] = [];
 
  code;
  generated = '';
  urlImage: any;
  converted_image: string;
  categorie: any;
  listcsv: any=[];
  listtva: any;
  tva: any;
  listsociete: any;
  soc: any;

  displayQrCode() {
    return this.generated !== '';
  }
/////////////
newImage;
scanData : {};
encodeData : string ;
encodedData : {} ;
 
options :BarcodeScannerOptions;
//////////////
fileUrl: any = null;
respData: any;
/////////////
ref;
prix;

min;

listData
//note='';

note='rien';

lib;
image;
//image="data:image/png;base64,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";

barre;
//image;
qr;
list:any;

  constructor(
    private http: Http,
    public navCtrl: NavController, public navParams: NavParams,
    private barcodeScanner: BarcodeScanner,
    public provider:ProduitProvider,public httpClient: HttpClient,public modalCtrl:ModalController,
    public Alert:AlertController,public tvaprovider:TvaProvider, public providerSociete : SocieteProvider
    ) {

      this.get()
      this.encodeText();
      this.getTva()
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

  downloadCSV() {
    // let csv = papa.unparse({
    //   fields: ["id","libelle","reference","categorie","prix location","prix location minimale","date de creation"],
    //   data: this.list
    // });
  //  this.readCsvData()
 
let csv=this.convertToCSV(this.listcsv)
console.log("csvvvvvvvvvvvv:",csv)
    // Dummy implementation for Desktop download purpose
    var blob = new Blob([csv]);
    var a = window.document.createElement("a");
    a.href = window.URL.createObjectURL(blob);
    a.download = "newdata.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  convertToCSV(objArray) {
    let array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;
    let str = '';
    let row = ""; 
    for (let index in objArray[0]) {
        //Now convert each value to string and comma-separated
        row += index + '|      ';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (let i = 0; i < array.length; i++) {
        let line = '';
        for (let index in array[i]) {
            if (line != '') line += '     |     ';
            line += array[i][index];
        }
        str += line + '\r\n';
    }
    return str;
  }

 
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProduitPage');
  }
  getTva(){
    this.tvaprovider.get()
    .then(data => {
      this.listtva = data;
    
      console.log("list:::::",this.list);
   
      console.log("csv list::::",this.listtva)
    });
  
  
    
  }
  process() {
    const qrcode = QRCode;
    const self = this;
   this.qr= qrcode.toDataURL(self.code, { errorCorrectionLevel: 'H' }, function (err, url) {
      self.generated = url;
    // console.log("codreqr:::",self.generated)/////base64
    window.localStorage.setItem("qr",self.generated)

    })
    this.qr=window.localStorage.getItem("qr")
  console.log("codreqr:::",this.qr)
}
get(){
  this.provider.get()
  .then(data => {
    this.list = data;
  
    console.log("list:::::",this.list);
    for(var i=0;i<this.list.length;i++){
      let pdt={
        id:"",
        libelle:"",
        ref:"",
        categorie:"",
        note:"",
        prix_location:"",
        prix_location_minimale:"",
      }
      pdt.id=this.list[i].id
      pdt.libelle=this.list[i].libelle
      pdt.ref=this.list[i].ref
    pdt.categorie=this.list[i].categorie
      pdt.note=this.list[i].note
    pdt.prix_location=this.list[i].prix_location
    pdt.prix_location_minimale=this.list[i].prix_location_minimale
  
      this.listcsv.push(pdt)  
      // console.log("prrrrrrrrrrrrrt::::",this.listcsv)
    }

 // this.listcsv.push(pdt)
    console.log("csv list::::",this.listcsv)
  });


  
  
}
 edit(a){
  console.log("edit");
  let credentials = {
    libelle:"update",
     image : this.image
     
    };
  this.provider.edit(a,credentials);
  this.navCtrl.setRoot(ProduitPage)
 }
 delete(a){
  console.log("delete");
  this.provider.delete(a);
  this.navCtrl.setRoot(ProduitPage)
 }
 add(){
  let credentials = {
  libelle:this.code,
  ref:this.ref,
  categorie:this.categorie,
  note:this.note,
  prix_location:this.prix,
  prix_location_minimale:this.min,
  qrCode:this.qr,
  codeBarre:this.barre,
  image:this.image,
  tva:this.tva,
  };

  this.provider.save(credentials).then((result)=>{
    console.log("info::::",credentials)
    
    console.log(result)
    
  },(err)=>{
    console.log("insert err: "+ err)
    console.log("this.myInfo: "+ JSON.stringify(credentials))
  })

 this.navCtrl.setRoot(ProduitPage)
 
 }
 
 print(a){

  let alert = this.Alert.create({
    title: 'nouvelle entrée',
    inputs: [
      {
        name: 'logo',
        placeholder: 'nombre'
      },
    
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        handler: data => {
          console.log('Cancel clicked');
        }
      },
      {
        text: 'ajouter',
        handler: data => {
          console.log("data:::",data.logo)

          let modal = this.modalCtrl.create(ImageQrcodePage, { item:a,nombre:data.logo});
          modal.present();
          console.log("res:",a);
     
 
       
     //   this.navCtrl.setRoot(DevisPage)
        }
      }
    ]
  });
  alert.present(alert);
  /////////////////////

 }
encodeText(){
  this.barcodeScanner.encode(this.barcodeScanner.Encode.TEXT_TYPE,"http://www.nytimes.com").then((encodedData) => {

    console.log("data",encodedData);
    this.encodedData = encodedData;

}, (err) => {
    console.log("Error occured : " + err);
});         

}
//////////////upload
encodeImageFileAsURL(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
  console.log('RESULT', reader.result);
  window.localStorage.setItem("image",reader.result.toString())
  }
  this.image=window.localStorage.getItem("image")
  console.log("image:::",this.image)
 reader.readAsDataURL(file);

   

}
encodeImageFileAsURL2(event) {
  var file = event.target.files[0];
  var reader = new FileReader();
  reader.onloadend = function() {
  console.log('RESULT', reader.result);
  window.localStorage.setItem("barre",reader.result.toString())
  }
  this. barre=window.localStorage.getItem("barre")
  console.log("barre:::",this.barre)
 reader.readAsDataURL(file);

   

}

////////////

  /////////////
  home(){
    this.navCtrl.setRoot(BlankPage)
  }
  ////////////////menu
bonretour(){
  this.navCtrl.setRoot(BonRetourPage)
}
dashboard(){
  this.navCtrl.setRoot(HomePage)
}
SortieV(){
  this.navCtrl.setRoot(SortieVldPage)
}
SortieC(){
  this.navCtrl.setRoot(SortieCltPage)
}
Sortieb(){
  this.navCtrl.setRoot(BonSortiePage)
}
tech(){
  this.navCtrl.setRoot(EmployeurPage)
}
Devis(){
  this.navCtrl.setRoot(DevisPage)
}
facture(){
  this.navCtrl.setRoot(FacturePage)
}
listFact(){
  this.navCtrl.setRoot(ListeFacturePage)
}
param(){
  this.navCtrl.setRoot(ParamPage)
}
societe(){
  this.navCtrl.setRoot(SocietePage)
}
produit(){
  this.navCtrl.setRoot(ProduitPage)
}
stock(){
  this.navCtrl.setRoot(StockPage)
}
reservation(){
  this.navCtrl.setRoot(ReservationPage)
}
entrepot(){
  this.navCtrl.setRoot(EntrepotPage)
}
ressource(){
  this.navCtrl.setRoot(RessourcesPage)
}
}
