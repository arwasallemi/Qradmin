import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, AlertController, Nav } from 'ionic-angular';
import { DelaiProvider } from '../../providers/delai/delai';
import { ConditionProvider } from '../../providers/condition/condition';
import { ModeProvider } from '../../providers/mode/mode';
import { TvaProvider } from '../../providers/tva/tva';

/**
 * Generated class for the ParamPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-param',
  templateUrl: 'param.html',
})
export class ParamPage {
  @ViewChild(Nav) nav:Nav;
  list: any;
  listmd: any;
  listcd: any;
  listTva: any;
  dataTva
  dataDelai
  dataMode
  dataCondition

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     public Delai:DelaiProvider,
     public Mode:ModeProvider,
     public tva : TvaProvider,
     public Condition:ConditionProvider,
     public Alert:AlertController
     ) {
       this.getDelai();
       this.getCondition();
       this.getMode();
       this.getTva()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ParamPage');
  }
getDelai(){
  this.Delai.get()
  .then(data => {
    this.list = data;
    console.log("list delai:::::",this.list);
  });
}
getMode(){
  this.Mode.get()
  .then(md => {
    this.listmd = md;
    console.log("list md:::::",this.listmd);
  });
}
getCondition(){
  this.Condition.get()
  .then(cd => {
    this.listcd = cd;
    console.log("list cd:::::",this.listcd);
  });
}
getTva(){
  this.tva.get()
  .then(tva => {
    this.listTva = tva;
    console.log("list tva:::::",this.listTva);
  });
}
// ADD delai

adddelai()                                                                                                       {
  let alert = this.Alert.create({
    title: 'nouvelle entrée',
    inputs: [
      {
        name: 'delai',
        placeholder: 'delai'
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
          console.log("data:::",data.delai)
this.dataDelai =data.delai
let credentials = {
  delai:this.dataDelai,
 
          
         };
       
         this.Delai.save(credentials).then((result)=>{
           console.log("info::::",credentials)
           
           console.log(result)
           
         },(err)=>{
           console.log("insert err: "+ err)
           console.log("this.myInfo: "+ JSON.stringify(credentials))
         })
       
     //   this.navCtrl.setRoot(DevisPage)
        }
      }
    ]
  });
  alert.present(alert);
}
addMode()                                                                                                       {
  let alertMode = this.Alert.create({
    title: 'nouvelle entrée',
    inputs: [
      {
        name: 'mode',
        placeholder: 'mode de règlement'
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
        handler: datamode => {
          console.log("data:::",datamode.mode)
          this.dataMode =datamode.mode
          let credentials = {
            mode:this.dataMode,
           
                    
                   };
                 
                   this.Mode.save(credentials).then((result)=>{
                     console.log("info::::",credentials)
                     
                     console.log(result)
                     
                   },(err)=>{
                     console.log("insert err: "+ err)
                     console.log("this.myInfo: "+ JSON.stringify(credentials))
                   })
                 
               //   this.navCtrl.setRoot(DevisPage)
                  }
                }
              ]
            });
            alertMode.present(alertMode);
}
addCondition()                                                                                                       {
  let alertCondition = this.Alert.create({
    title: 'nouvelle entrée',
    inputs: [
      {
        name: 'condition',
        placeholder: 'condition de règlement'
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
        handler: datacondition => {
          console.log("data:::",datacondition.condition)
          this.dataCondition =datacondition.condition
          let credentials = {
            condition:this.dataCondition,
           
                    
                   };
                 
                   this.Condition.save(credentials).then((result)=>{
                     console.log("info::::",credentials)
                     
                     console.log(result)
                     
                   },(err)=>{
                     console.log("insert err: "+ err)
                     console.log("this.myInfo: "+ JSON.stringify(credentials))
                   })
                 
               //   this.navCtrl.setRoot(DevisPage)
                  }
                }
              ]
            });
            alertCondition.present(alertCondition);
}
addtva()                                                                                                       {
  let alerttva = this.Alert.create({
    title: 'nouvelle entrée',
    inputs: [
      {
        name: 'tva',
        placeholder: 'Valeur % '
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
        handler: datatva => {
          console.log("data:::",datatva.tva)
          this.dataTva =datatva.tva
          let credentials = {
            valeur:this.dataTva,
           
                    
                   };
                 
                   this.tva.save(credentials).then((result)=>{
                     console.log("info::::",credentials)
                     
                     console.log(result)
                     
                   },(err)=>{
                     console.log("insert err: "+ err)
                     console.log("this.myInfo: "+ JSON.stringify(credentials))
                   })
                 
               //   this.navCtrl.setRoot(DevisPage)
                  }
                }
              ]
            });
            alerttva.present(alerttva);
}
}
