import { Component } from '@angular/core';

@Component ({
  selector: 'my-app',
  template: `
  <ul id="lst">
    <li><a [routerLink] = "[\'/main\']">Main page</a></li>
    <li><a [routerLink] = "[\'/profile\']">My profile</a></li>
  </ul>
  <br/>Main page`,
})
export   class   AppMainpage  {}
