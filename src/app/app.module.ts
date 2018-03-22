import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent}  from './app.component';
import {AppProfile} from './profile/profile.component';
import {AppMainpage} from './mainpage/mainpage.component';
import {routing} from './app.routing';
import {AuthGuard} from './guard/auth.guard';
import {AuthenticationService} from './services/authentication.service';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppLogout} from "./logout/logout.component";
import {AppRegistration} from "./registration/registration.component";
import {AppLogin} from "./login/login.component";
import {AppFriends} from "./friends/friends.component";

@NgModule ({
  imports: [ BrowserModule, routing, FormsModule, HttpClientModule],
  declarations: [ AppComponent, AppMainpage, AppProfile, AppLogin, AppLogout, AppRegistration, AppFriends],
  providers: [ AuthGuard, AuthenticationService, HttpClient ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
