import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './friends.component.html'
})

export   class   AppFriends  {

  private model: any;

  constructor() {}

  change() {
  }

  fetch() {
  }
}
