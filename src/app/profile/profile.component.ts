import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './profile.component.html'
})

export   class   AppProfile  {

  public tweets: any;
  model: any = {};

  constructor (private authService: AuthenticationService) {}

  tweet() {
    this.authService.tweet(this.model.new).subscribe(
      data => {
        console.log("Tweet has been added");
      }
    );
  }

  fetchMyTweets() {
    this.authService.fetchAllUsersTweets().subscribe(
      data => {
        console.log('Users tweets fetched');
        this.tweets = data;
      }
    );
  }
}
