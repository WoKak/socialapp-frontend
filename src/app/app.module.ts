import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { RouterModule, Routes } from '@angular/router';
import {AppProfile} from './profile.component';
import {AppMainpage} from './mainpage.component';
import {AppLogin} from './login.component';

const appRoutes: Routes = [
  { path: 'main', component: AppMainpage },
  { path: 'profile', component: AppProfile },
  { path: 'login', component: AppLogin}
];

@NgModule ({
  imports: [ BrowserModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, AppMainpage, AppProfile, AppLogin],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
