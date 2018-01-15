import {AppProfile} from './profile/profile.component';
import {AppMainpage} from './mainpage/mainpage.component';
import {AppLogin} from './login/login.component';
import {Routes, RouterModule} from "@angular/router";
import {AuthGuard} from "./guard/auth.guard";

const appRoutes: Routes = [
  { path: 'main', component: AppMainpage, canActivate: [AuthGuard] },
  { path: 'profile', component: AppProfile },
  { path: 'login', component: AppLogin},

  { path: '**', redirectTo: 'login' }
];

export const routing = RouterModule.forRoot(appRoutes);
