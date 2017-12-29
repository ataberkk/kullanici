import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-select-user',
  templateUrl: 'select-user.html'
})
export class SelectUserPage {
  public users:any;

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    this.loadUsers();
  }

  loadUsers() {
    this.service.getUsers()
      .then(data => { 
        this.users = data;
      });
  }
}