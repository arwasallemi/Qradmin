import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';



import { Storage } from '@ionic/storage';
import { Http , Headers } from '@angular/http';
/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
const httpOptions = {
  headers: new HttpHeaders(
    { 'Content-Type': 'application/json',
    'withCredentials': 'true' }
).append('Authorization', "api_token")
};
@Injectable()
export class AuthProvider {


  public token: any;
  constructor(public http: HttpClient,public storage:Storage) {
   //  console.log('Hello AuthProvider Provider');
  }


  save(data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://testmariadb.alwaysdata.net/public/login',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
  login(credentials){
    return new Promise((resolve, reject) => {

      this.http.post('http://testmariadb.alwaysdata.net/public/login', JSON.stringify(credentials), httpOptions)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
  });
 
  }



}