import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailGroupPage } from '../detail-group/detail-group';



@Component({
  selector: 'page-groups',
  templateUrl: 'groups.html'
})
export class GroupsPage {
  public users:any;

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
  }

  groups = [
    'Grup A',
    'Grup B',
    'Grup C'
  ];

  goToGroupDetailPage(name:string){
    this.navCtrl.push(DetailGroupPage,{name});
  }
  
}