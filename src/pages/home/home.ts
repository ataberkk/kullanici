import { GroupsPage } from './../groups/groups';
import { UsersPage } from './../users/users';
import { AddUserPage } from './../add-user/add-user';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToUsersPage(){
    this.navCtrl.push(UsersPage);
  }

  goToAddUserPage(){
    this.navCtrl.push(AddUserPage);
  }

  goToGroupsPage(){
    this.navCtrl.push(GroupsPage);
  }

}
