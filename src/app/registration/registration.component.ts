import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {SpringService} from "../services";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './registration.component.html'
})

export class AppRegistration {

  model: any = {};
  token: string;

  constructor(private router: Router, private springService: SpringService) {
  }

  register() {

    this.springService.register(this.model.username, this.model.password).subscribe(
      data => {
        console.log("Registration successful");
        this.router.navigate(['/login']);
      }
    );
  }

  redirectLogin() {
    this.router.navigate(['/login']);
  }
}
