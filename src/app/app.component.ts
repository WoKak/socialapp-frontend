import {Component} from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <div class="jumbotron">
      <h1 class="display-4">socialapp</h1>
    </div>
    <router-outlet></router-outlet>
  `,
})

export class AppComponent {
}
