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
export class DevisProvider {

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
  
       this.http.get('http://testmariadb.alwaysdata.net/public/devis/devis', {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           resolve(data);
         }, (err) => {
           reject(err);
         }); 
     }) 

   });

 }




 getitems() {
  return new Promise(resolve => {
    this.http.get('http://testmariadb.alwaysdata.net/public/devis/devis').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}


 


save(data) {
  return new Promise((resolve, reject) => {
    this.http.post('http://testmariadb.alwaysdata.net/public/devis/devis',data)
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

     this.http.put('http://testmariadb.alwaysdata.net/public/devis/devis/' +id ,  JSON.stringify(postInfo),  {headers: headers})
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
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);

     this.http.delete('http://testmariadb.alwaysdata.net/public/devis/devis/' +id,    {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}

}
