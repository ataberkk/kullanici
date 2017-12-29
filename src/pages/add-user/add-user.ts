import { FormBuilder } from '@angular/forms';
import { Http } from '@angular/http';
import { HomePage } from './../home/home';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Toast } from 'ionic-angular/components/toast/toast';
import { Validators} from '@angular/forms';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'page-adduser',
  templateUrl: 'add-user.html'
})
export class AddUserPage {
  isAddUser:number;
  user_id:number;
  user:FormGroup;

  constructor(public navCtrl: NavController, public service:ServiceProvider, navParams: NavParams, public toastCtrl: ToastController, public formBuilder: FormBuilder) {
    this.user_id = navParams.get("user_id");
    this.user = formBuilder.group({
      name: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      email: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      telephone: [''],
      unity: ['']
  });
  }

  addUser(form){
    console.log(this.user.value);
      /*this.service.addUser(this.user.value).subscribe(res => {
        this.isAddUser = res["success"];
        console.log(res);
      });*/

      this.isAddUser = 1;
        if(this.isAddUser){
          let tm = this.toastCtrl.create({
              message : 'Kişi başarılı bir şekilde eklenmiştir.',
              duration: 2000,
              position:'bottom'
          });
          tm.present();
          this.navCtrl.push(HomePage);
        }
      
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddProductPage');
  }
}