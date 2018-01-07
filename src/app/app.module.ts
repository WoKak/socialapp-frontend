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
import {HttpModule} from '@angular/http';


@NgModule ({
  imports: [ BrowserModule, routing, FormsModule, HttpModule],
  declarations: [ AppComponent, AppMainpage, AppProfile, AppLogin],
  providers: [ AuthGuard, AuthenticationService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
