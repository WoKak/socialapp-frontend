import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './settings.component.html'
})

export   class   AppSettings  {

  private model: any;

  constructor() {}

  change() {
  }

  fetch() {
  }
}
