import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component ({
  selector: 'my-app',
  template: `
    <h1>socialapp</h1>
    <form>
      <input type="text" placeholder="login"/>
      <br/>
      <input type="password" placeholder="password"/>
      <br>
      <input type="submit" value="login" id="lgn_btn" (click)="login()"/>
    </form>`,
})

export   class   AppLogin  {

  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl('/profile');
  }
}
