import { GroupsPage } from './../groups/groups';
import { SelectUserPage } from './../select-user/select-user';
import { SelectAuthorityPage} from './../select-authority/select-authority';
import { HomePage } from './../home/home';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';

@Component({
  selector: 'page-update-group',
  templateUrl: 'update-group.html'
})
export class UpdateGroupPage {
  
  constructor(public navCtrl: NavController, public service:ServiceProvider, navParams: NavParams, public toastCtrl: ToastController) {
    
  }
  
  goToSelectUserPage(){
    this.navCtrl.push(SelectUserPage);
  }

  goToSelectAuthorityPage(){
    this.navCtrl.push(SelectAuthorityPage);
  }

  goToGroupsPage(){
    this.navCtrl.push(GroupsPage);
  }
}