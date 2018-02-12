import { Component } from '@angular/core';
import {AuthenticationService} from "../services/authentication.service";

@Component ({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './mainpage.component.html'
})
export   class   AppMainpage  {

  public tweets: any;

  constructor(private authService: AuthenticationService) {
    this.fetch()
  }

  fetch() {
    this.authService.fetchAllTweets().subscribe(
      data => {
        console.log('Tweets fetched');
        this.tweets = data;
      }
    );
  }
}
