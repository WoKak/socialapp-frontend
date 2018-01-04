import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './login.component.html'
})

export   class   AppLogin  {

  constructor(private router: Router) {}

  login() {
    this.router.navigateByUrl('/profile');
  }
}
