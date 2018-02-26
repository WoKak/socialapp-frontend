import {AppProfile} from './profile/profile.component';
import {AppMainpage} from './mainpage/mainpage.component';
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "./guard/auth.guard";
import {AppLogout} from "./logout/logout.component";
import {AppRegistration} from "./registration/registration.component";
import {AppFriends} from "./friends/friends.component";
import {AppLogin} from "./login/login.component";

const appRoutes: Routes = [
  { path: 'main', component: AppMainpage, canActivate: [AuthGuard]},
  { path: 'profile', component: AppProfile, canActivate: [AuthGuard] },
  { path: 'login', component: AppLogin},
  { path: 'logout', component: AppLogout},
  { path: 'registration', component: AppRegistration},
  { path: 'friends', component: AppFriends, canActivate: [AuthGuard]},

  { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
