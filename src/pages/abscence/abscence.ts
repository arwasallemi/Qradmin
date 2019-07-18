import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EmployeurProvider } from '../../providers/employeur/employeur';
import { PointageProvider } from '../../providers/pointage/pointage';
import { AbscenceProvider } from '../../providers/abscence/abscence';

@IonicPage()
@Component({
  selector: 'page-abscence',
  templateUrl: 'abscence.html',
})
export class AbscencePage {
  nomEmpl
  date1
  date2
  motif
nbr
  listEmpl
  listAbscence
  idEmp
  listEmplid
  item
  listEmployeur: {};
  listep: any;
  constructor(
    public EmplProvider:EmployeurProvider,
    public navCtrl: NavController, public navParams: NavParams,
    public crudemply : EmployeurProvider, public crudAbscence : AbscenceProvider) {
    this.getEmpl()
    //this.loadpointage()
  //  this.loadAbscence()
  this.loadempl()
  //this.loadAbscence()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PointagePage');
  }

  getEmpl(){
    
  

      this.crudemply.get()
      .then(data => {
        this.listEmpl = data;



        console.log(this.idEmp,"idEmp")
     
    
      });
  
  }
  
  chooseid(){
  for(var i=0; i< this.listEmpl.length ;i++){
    if(this.listEmpl[i].name === this.nomEmpl)
    {
      this.idEmp = this.listEmpl[i].id
    //  console.log(this.idEmp,"idempppppppppppp")
    }
   

  }

  console.log(this.idEmp,"idempppppppppppp")
  }
  add(){
    let credentials = {
      date_abscence:this.date1,
      date_retour:this.date2,
      nbrJour:this.nbr,
      motif_abscence:this.motif,
      employeur_id : this.idEmp
    };
  
    this.crudAbscence.saveAbscence(credentials).then((result)=>{
      console.log("info::::",credentials)
      
      console.log(result)
      
    },(err)=>{
      console.log("insert err: "+ err)
      console.log("this.myInfo: "+ JSON.stringify(credentials))
    })
  

   
   }
   loadempl(){
    this.crudemply.get()
    .then(data => {
      this.listEmpl = data;
      console.log(this.listEmpl,"list")



      console.log(this.idEmp,"idEmp")
      this.crudAbscence.loadabscence()
      .then(data => {
        this.listAbscence = data;
        console.log(this.listAbscence,"listAbscence")
  
  for(var i=0;i<this.listEmpl.length;i++){
    
    for(var j=0;j<this.listAbscence.length;j++){
if(this.listEmpl[i].id===this.listAbscence[j].employeur_id){
  this.listAbscence[j].employeur_id=this.listEmpl[i].name
}
    }
  }
      });
  
    });
   }
  edit(a){
    console.log(a);
    //this.image=window.localStorage.getItem("image")
    let credentials = {
      nbrJour:a.nbrJour,
      date_abscence :a.date_abscence,
      date_retour:a.date_retour,
      motif_abscence :a.motif_abscence,
      };
    this.crudAbscence.edit(a.id, credentials);
    this.navCtrl.setRoot(AbscencePage) 
    console.log(a.date_abscence ,"date_abscence")
   }
   loadAbscence(){
    this.crudAbscence.loadabscence().then(data => {
      this.listAbscence = data;
      console.log(this.listAbscence,"listAbscence")


    });

  }

}
