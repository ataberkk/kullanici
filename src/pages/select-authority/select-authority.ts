import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-select-authority',
  templateUrl: 'select-authority.html'
})
export class SelectAuthorityPage {

  constructor(public navCtrl: NavController, public service: ServiceProvider) {
    
  }

  authors=[
      'Yetki 1',
      'Yetki 2',
      'Yetki 3'
    ];
  
}