import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/index';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './login.component.html'
})

export   class   AppLogin  {

  model: any = {};
  token: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  login() {

    this.authenticationService.login(this.model.username, this.model.password).subscribe(
      data => {
        this.token = data;

        if (this.token !== '') {
          this.router.navigate(['/main']);
        }
      }
    );
  }
}
