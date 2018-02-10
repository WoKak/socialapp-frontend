import { Component } from '@angular/core';
let $ = require('../../node_modules/jquery/dist/jquery.min.js');

@Component({
  selector: 'my-app',
  template: `
    <h1 class="greeting">socialapp</h1>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent  {
}
