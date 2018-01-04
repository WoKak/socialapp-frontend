import { Component } from '@angular/core';
let $ = require('../../node_modules/jquery/dist/jquery.min.js');

@Component({
  selector: 'my-app',
  template: `
    <h1 class="greeting">Welcome to socialapp!</h1>
    <p class="greeting">Click continue to login</p>
    <a [routerLink] = "['/login']" id="cntn_lnk" (click)="clearGreeting()" class="greeting">continue</a>
    <router-outlet>
    </router-outlet>
  `,
})

export class AppComponent  {

  clearGreeting(): void {
    $('.greeting').remove();
  }
}
