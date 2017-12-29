import { SelectUserPage } from './../pages/select-user/select-user';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddUserPage } from './../pages/add-user/add-user';
import { DetailUserPage} from './../pages/detail-user/detail-user';
import { UsersPage } from './../pages/users/users';
import { GroupsPage} from './../pages/groups/groups';
import { DetailGroupPage } from './../pages/detail-group/detail-group';
import { UpdateGroupPage} from './../pages/update-group/update-group';
import {SelectAuthorityPage} from './../pages/select-authority/select-authority';
import { ServiceProvider } from '../providers/service/service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddUserPage,
    DetailUserPage,
    DetailGroupPage,
    GroupsPage,
    UpdateGroupPage,
    SelectUserPage,
    SelectAuthorityPage,
    UsersPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddUserPage,
    DetailUserPage,
    DetailGroupPage,
    GroupsPage,
    UpdateGroupPage,
    SelectUserPage,
    SelectAuthorityPage,
    UsersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider
  ]
})
export class AppModule {}
