import {Component} from '@angular/core';
import {SpringService} from "../services";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './friends.component.html'
})

export class AppFriends {

  private model: any = {};
  public friends: any;

  constructor(private springService: SpringService, private router: Router) {
    this.fetchFriends();
  }

  addFriend() {
    this.springService.addFriend(this.model.new).subscribe(
      data => {
        console.log('Friend added')
      }
    );
    this.router.navigate(['/profile']);
  }

  fetchFriends() {
    this.springService.fetchFriends().subscribe(
      data => {
        console.log('Users friends fetched');
        this.friends = data;
      }
    );
  }

  removeFriend(friend: any) {
    this.springService.removeFriend(friend).subscribe(
      data => {
        console.log('Friend has been removed');
      }
    );
    this.router.navigate(['/main']);
  }
}
