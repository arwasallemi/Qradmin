import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



 
import { Http , Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Rx';
 
import { catchError } from 'rxjs/operators';


/*
  Generated class for the EntrepotProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};
@Injectable()
export class BonSortieProvider {
databonSortie
  constructor(public storage: Storage ,
    public http: Http, public httpClient: HttpClient) {
    console.log('Hello EntrepotProvider Provider');
  }

  get(){
    return new Promise((resolve, reject) => {
     this.storage.get('token').then((value) => {

       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
       headers.append('Authorization', 'Bearer '+value);

       console.log('value: ' + value);
  
       this.http.get('http://testmariadb.alwaysdata.net/public/bonsortie/bonsorties/', {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           resolve(data);
         }, (err) => {
           reject(err);
         }); 
     }) 

   });

 }


   
 loadBonsortie() {
     if (this.databonSortie) {
       return Promise.resolve(this.databonSortie);
     }
   
     
     // don't have the data yet
     return new Promise(resolve => {
       // We're using Angular HTTP provider to request the data,
       // then on the response, it'll map the JSON data to a parsed JS object.
       // Next, we process the data and resolve the promise with the new data.
       this.http.get('http://testmariadb.alwaysdata.net/public/bonsortie/bonsorties')
         .map(res => res.json())
         .subscribe(data => {
           // we've got back the raw data, now generate the core schedule data
           // and save the data for later reference
           this.databonSortie = data;
           resolve(this.databonSortie);
         });
     });
   }


 

 


save(data) {
  return new Promise((resolve, reject) => {
    this.http.post('http://testmariadb.alwaysdata.net/public/bonsortie/bonsorties',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}


edit(id,postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);

     this.http.put('http://testmariadb.alwaysdata.net/public/bonsortie/bonsorties/' +id ,  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}






delete(id){
//   return new Promise((resolve, reject) => {
//    this.storage.get('token').then((value) => {

//      let headers = new Headers();
//      headers.append('Content-Type', 'application/json');
//      headers.append('Authorization', 'Bearer '+value);
//      console.log('value: ' + value);

//      this.http.delete('http://testmariadb.alwaysdata.net/public/bonsortie/bonsorties/' +id,    {headers: headers})
//        .map(res => res.json())
//        .subscribe(data => {
//          resolve(data);
//        }, (err) => {
//          reject(err);
//        }); 
//    }) 

//  });
return new Promise(resolve => {
     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
   //  headers.append('Authorization');
  //   console.log('value: ' + value);
  this.http.delete('http://testmariadb.alwaysdata.net/public/bonsortie/bonsorties/' +id,    {headers: headers})
    .map(res => res.json())
    .subscribe(data => {
      // we've got back the raw data, now generate the core schedule data
      // and save the data for later reference
      this.databonSortie = data;
      resolve(this.databonSortie);
    });
});
}
}


