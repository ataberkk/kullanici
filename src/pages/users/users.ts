import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailUserPage } from '../detail-user/detail-user';


@Component({
  selector: 'page-users',
  templateUrl: 'users.html'
})
export class UsersPage {
  public users:any;

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    this.loadUsers();
  }
  goToUserDetailPage(name:string){
    this.navCtrl.push(DetailUserPage,{name});
  }

  loadUsers() {
    this.service.getUsers()
      .then(data => { 
        this.users = data;
      });
  }
}