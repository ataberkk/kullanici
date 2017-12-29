import { AbstractControl, FormBuilder } from '@angular/forms';
import { HomePage } from './../home/home';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup } from '@angular/forms/src/model';
import { Alert } from 'ionic-angular/components/alert/alert';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Component({
  selector: 'page-detailuser',
  templateUrl: 'detail-user.html'
})
export class DetailUserPage {
  user_id:AbstractControl;
  user_name:AbstractControl;
  user_email:AbstractControl;
  user_telephone:AbstractControl;
  formgroup:FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public formBuilder: FormBuilder, public alertCtrl: AlertController) {
    this.user_id = navParams.get("user_id");
    
    this.formgroup = this.formBuilder.group({
      user_name:[''],
      user_email:[''],
      user_telephone:['']
    });

    this.user_name = this.formgroup.controls['user_name'];
    this.user_email = this.formgroup.controls['user_email'];
    this.user_telephone = this.formgroup.controls['user_telephone'];
  }

  updateUser(){
    console.log(this.formgroup.value);
    let toast = this.toastCtrl.create({
        message:'Kişi başarılı bir şekilde güncellenmiştir.',
        duration:3000,
        position:'bottom'
    });
    toast.present();
    
  }

  deleteUser(){
    let alert = this.alertCtrl.create({
      title: 'Sil',
      message: 'Kişiyi silmek istediğinize emin misiniz?',
      buttons: [
        {
          text: 'İptal',
          role: 'iptal',
          handler: () => {
            console.log('Silme iptal edildi.');
          }
        },
        {
          text: 'Evet',
          handler: () => {
            console.log('Silme onaylandı.');
            let toast = this.toastCtrl.create({
              message: 'Kişi başarılı bir şekilde silinmiştir.',
              duration : 3000,
              position:'bottom'
            });
            toast.present();
            this.navCtrl.push(HomePage);
          }
        }
      ]
    });
    alert.present();
    
  }


}