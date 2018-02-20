import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../services/authentication.service";

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './registration.component.html'
})

export   class   AppRegistration  {

  model: any = {};
  token: string;

  constructor(private router: Router, private authenticationService: AuthenticationService) {}

  register() {

    this.authenticationService.register(this.model.username, this.model.password).subscribe(
      data => {
        console.log("Registration successful");
        this.router.navigate(['/login']);
      }
    );
  }
}
