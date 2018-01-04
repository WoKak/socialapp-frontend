import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import {AppProfile} from './profile/profile.component';
import {AppMainpage} from './mainpage/mainpage.component';
import {AppLogin} from './login/login.component';
import {routing} from "./app.routing";
import {AuthGuard} from "./guard/auth.guard";


@NgModule ({
  imports: [ BrowserModule, routing],
  declarations: [ AppComponent, AppMainpage, AppProfile, AppLogin],
  providers: [ AuthGuard ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
