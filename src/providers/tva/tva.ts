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
export class TvaProvider {
  tva: any;

  constructor(public storage: Storage ,
    public http: Http, public httpClient: HttpClient) {
    console.log('Hello EntrepotProvider Provider');
  }

  get(){
    if (this.tva) {
      return Promise.resolve(this.tva);
    }
  

    return new Promise(resolve => {

      this.http.get('http://testmariadb.alwaysdata.net/public/tva/tvas')
        .map(res => res.json())
        .subscribe(data => {
  
          this.tva = data;
          resolve(this.tva);
        });
    });

 }
 save(data) {
    return new Promise((resolve, reject) => {
      this.http.post('http://testmariadb.alwaysdata.net/public/tva/tvas',data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }
  
}