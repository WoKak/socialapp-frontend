import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";
import {Router} from "@angular/router";

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './friends.component.html'
})

export   class   AppFriends  {

  private model: any = {};
  public friends: any;

  constructor(private authService: AuthenticationService, private router: Router) {this.fetchFriends();}

  addFriend() {
    this.authService.addFriend(this.model.new).subscribe(
      data => {
        console.log('Friend added')
      }
    );
    this.router.navigate(['/main']);
  }

  fetchFriends() {
    this.authService.fetchFriends().subscribe(
      data => {
        console.log('Users friends fetched');
        this.friends = data;
      }
    );
  }

  removeFriend(friend: any) {
    this.authService.removeFriend(friend).subscribe(
      data => {
        console.log('Friend has been removed');
      }
    );
    this.router.navigate(['/main']);
  }
}
