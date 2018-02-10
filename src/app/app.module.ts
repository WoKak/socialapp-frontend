import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {AppProfile} from './profile/profile.component';
import {AppMainpage} from './mainpage/mainpage.component';
import {AppLogin} from './login/login.component';
import {routing} from './app.routing';
import {AuthGuard} from './guard/auth.guard';
import {AuthenticationService} from './services/authentication.service';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppLogout} from "./logout/logout.component";

@NgModule ({
  imports: [ BrowserModule, routing, FormsModule, HttpClientModule],
  declarations: [ AppComponent, AppMainpage, AppProfile, AppLogin, AppLogout],
  providers: [ AuthGuard, AuthenticationService, HttpClient ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
