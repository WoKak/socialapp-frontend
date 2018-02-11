import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";


@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './logout.component.html'
})
export class AppLogout  {

  constructor (private authService: AuthenticationService) {

    this.authService.logout().subscribe(
      data => {
        console.log("Logout successful");
      }
    );
  }
}
