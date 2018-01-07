import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/index';
import {User} from '../model/user';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './login.component.html'
})

export   class   AppLogin  {

  model: any = {};

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  login() {

    this.authenticationService.login(this.model.username, this.model.password).subscribe(
      data => {
          console.log(data);
          alert('OK!');
      }
    );
    this.router.navigate(['/main']);
    //
    // Call with credentials to authentication service - if ok redirect to main page
    // this.authenticationService.login(this.model.username, this.model.password).subscribe(
    //     user => {
    //       this.router.navigate(['/main']);
    //     }
    // );
  }
}
