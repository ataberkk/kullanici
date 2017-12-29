import { Users } from './../../models/users';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

/*
  Generated class for the ServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ServiceProvider {
    data:any;

  constructor(public http: Http) {
    console.log('Hello ServiceProvider Provider');
  }

    getUsers() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('https://randomuser.me/api/?results=10')
        .map(res => res.json())
        .subscribe(data => {
          this.data = data.results;
          resolve(this.data);
        });
    });
  }
  addUser(data){
    
  }

  deleteUser(){

  }

  updateUser(){
    
  }

}
