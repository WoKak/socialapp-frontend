import {AppProfile} from './profile';
import {AppMainpage} from './mainpage';
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "./guard";
import {AppLogout} from "./logout";
import {AppRegistration} from "./registration";
import {AppFriends} from "./friends";
import {AppLogin} from "./login";

const appRoutes: Routes = [
  {path: 'main', component: AppMainpage, canActivate: [AuthGuard]},
  {path: 'profile', component: AppProfile, canActivate: [AuthGuard]},
  {path: 'login', component: AppLogin},
  {path: 'logout', component: AppLogout},
  {path: 'registration', component: AppRegistration},
  {path: 'friends', component: AppFriends, canActivate: [AuthGuard]},

  {path: '**', redirectTo: 'login'}
];

export const routing = RouterModule.forRoot(appRoutes);
