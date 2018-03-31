import {Component} from '@angular/core';
import {SpringService} from "../services";


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './logout.component.html'
})
export class AppLogout {

  constructor(private springService: SpringService) {

    this.springService.logout().subscribe(
      data => {
        console.log("Logout successful");
      }
    );
  }
}
