import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocieteProvider } from '../../providers/societe/societe';

@IonicPage()
@Component({
  selector: 'page-societe',
  templateUrl: 'societe.html',
})
export class SocietePage {
  listsociete
  images
item
converted_image: string;
image;
  code:any;
  selectedFiles: FileList;
  //currentUpload: Upload;
 // image = "data:image/png;base64,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"
  constructor(public navCtrl: NavController, public navParams: NavParams,public providerSociete : SocieteProvider) {

//this.loadImage()
    this.getsociete()
  }
 
   
     ionViewDidLoad() {
       console.log('ionViewDidLoad UploadPage');
     }
 
    
      
   
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
    
     //  this.edit(this.image)
    
    }


  edit(a){
    console.log("edit");
    //this.image=window.localStorage.getItem("image")
    let credentials = {
       nom:this.item.nom,
       siege : this.item.siege,
       alt:this.image,
       tel1 : this.item.tel1,
     MF : this.item.MF,
      tel2 : this.item.tel2,
      tel3 : this.item.tel3,
      RIB : this.item.RIB,
       

       
      };
    this.providerSociete.edit(a, credentials);
    this.navCtrl.setRoot(SocietePage) 
    console.log(this.item.alt ,"alttttttttttttttt")
   }
  loadImage(){

    this.providerSociete.loadsociete()
    .then(data => {
      this.images = data;
      console.log("data .......................",this.images)

 
  
  
    });
  
  }
  getsociete(){
    this.providerSociete.loadsociete()
    .then(data => {
      this.listsociete = data;
      console.log("listsociete:::::",this.listsociete);
     this.item = this.listsociete[0]
    });
  }

}
