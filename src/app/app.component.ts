import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `    
    <ul>
      <li><a [routerLink] = "['/main']">Main page</a></li>
      <li><a [routerLink] = "['/profile']">My profile</a></li>
    </ul>
    <router-outlet></router-outlet>`,
})
export class AppComponent  {}
