import { HomePage } from './../home/home';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';
import { UpdateGroupPage } from './../update-group/update-group';
import { ServiceProvider } from './../../providers/service/service';
import { GroupsPage } from './../groups/groups';
import { ToastController } from 'ionic-angular/components/toast/toast-controller';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-detailgroup',
  templateUrl: 'detail-group.html'
})
export class DetailGroupPage {
  public users:any;

  constructor(public navCtrl: NavController, public service:ServiceProvider, public alertCtrl:AlertController, public toastCtrl: ToastController){
      this.loadUsers();
  }

  loadUsers() {
    this.service.getUsers()
      .then(data => { 
        this.users = data;
      });
  }

  updateGroup(){
    this.navCtrl.push(UpdateGroupPage);
  }

  deleteGroup(){
    let alert = this.alertCtrl.create({
      title: 'Grubu Sil',
      message: 'Grubu silmek istediğinize emin misiniz?',
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
              message: 'Grup başarılı bir şekilde silinmiştir.',
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