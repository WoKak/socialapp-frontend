import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {SpringService} from '../services';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './login.component.html'
})

export class AppLogin {

  model: any = {};
  token: string;

  constructor(private router: Router, private springService: SpringService) {
  }

  login() {

    this.springService.login(this.model.username, this.model.password).subscribe(
      data => {
        this.token = data;

        if (this.token !== '') {
          this.router.navigate(['/main']);
        }
      }
    );
  }

  redirectRegister() {
    this.router.navigate(['/registration']);
  }
}
