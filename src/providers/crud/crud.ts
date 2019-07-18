import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';




import { Http , Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';
import {Observable} from 'rxjs/Rx';

import { catchError } from 'rxjs/operators';


/*
  Generated class for the CrudProvider provider.

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
export class CrudProvider {

  constructor(public storage: Storage ,
    public http: Http, public httpClient: HttpClient
     ) {
    console.log('Hello CrudProvider Provider');
  }




  getPosts(){
    return new Promise((resolve, reject) => {
     this.storage.get('token').then((value) => {

       let headers = new Headers();
       headers.append('Content-Type', 'application/json');
       headers.append('Authorization', 'Bearer '+value);

       console.log('value: ' + value);
  
       this.http.get('http://localhost:8000/api/authors', {headers: headers})
         .map(res => res.json())
         .subscribe(data => {
           resolve(data);
         }, (err) => {
           reject(err);
         }); 
     }) 

   });

 }




 getUsers() {
  return new Promise(resolve => {
    this.http.get('http://localhost:8000/api/authors').subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}


 
 insertPosts(postInfo){


//  return this.http.post(`http://localhost:8000/api/authors`,postInfo).toPromise();
let headers = new Headers();
headers.append('Access-Control-Allow-Origin' , '*');
headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
headers.append('Accept','application/json');
headers.append('content-type','application/json');
headers.append('Access-Control-Allow-Credentials','true');
 let options = new RequestOptions({ headers:headers});
  return new Promise((resolve, reject) => {
    //this.storage.get('token').then(() => {
 
   

      console.log('value: ',postInfo);
 
      this.http.post('https://localhost:8000/api/authors' ,JSON.stringify(postInfo))
      .map(res => res.json())
        .subscribe(data => {
          resolve(data);
      
        }, (err) => {
          reject(err);
        }); 
        console.log("my data:",postInfo)
    })
 
 // });
}
 



saveUser(data) {
  return new Promise((resolve, reject) => {
    this.http.post('http://testmariadb.alwaysdata.net/public/register',data)
      .subscribe(res => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
  });
}


editPosts(id,postInfo){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);

     this.http.put('http://localhost:8000/api/authors/' +id ,  JSON.stringify(postInfo),  {headers: headers})
       .map(res => res.json())
       .subscribe(data => {
         resolve(data);
       }, (err) => {
         reject(err);
       }); 
   }) 

 });

}






deletePosts(id ){
  return new Promise((resolve, reject) => {
   this.storage.get('token').then((value) => {

     let headers = new Headers();
     headers.append('Content-Type', 'application/json');
     headers.append('Authorization', 'Bearer '+value);
     console.log('value: ' + value);

     this.http.delete('http://localhost:8000/api/authors/' +id,    {headers: headers})
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
