import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1 class="greeting">socialapp</h1>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
}
