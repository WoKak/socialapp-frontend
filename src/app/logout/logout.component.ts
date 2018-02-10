import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthenticationService} from "../services/authentication.service";

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './logout.component.html'
})
export   class   AppLogout  {

  constructor(private http: HttpClient, private authService: AuthenticationService) {}

  main() {
    this.authService.main().subscribe(
      data => {
        console.log(data);
      }
    );
  }
}
