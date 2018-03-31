import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppProfile} from './profile';
import {AppMainpage} from './mainpage';
import {routing} from './app.routing';
import {AuthGuard} from './guard';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {AppLogout} from "./logout";
import {AppRegistration} from "./registration";
import {AppLogin} from "./login";
import {AppFriends} from "./friends";
import {FriendsService, SettingsService, TweetService, SpringService} from "./services";

@NgModule({
  imports: [BrowserModule, routing, FormsModule, HttpClientModule],
  declarations: [AppComponent, AppMainpage, AppProfile, AppLogin, AppLogout, AppRegistration, AppFriends],
  providers: [AuthGuard, SpringService, HttpClient, FriendsService, TweetService, SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
