import {Component} from '@angular/core';
import {AuthenticationService} from "../services";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './mainpage.component.html'
})
export class AppMainpage {

  public tweets: any;

  constructor(private authService: AuthenticationService, private router: Router) {
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

  flagTweet(id: any) {
    this.authService.flagTweet(id).subscribe(
      data => {
        console.log('Tweet flagged');
      }
    );
    this.router.navigate(['/profile']);
  }
}
