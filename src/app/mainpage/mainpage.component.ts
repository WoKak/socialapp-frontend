import {Component} from '@angular/core';
import {SpringService} from "../services";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './mainpage.component.html'
})
export class AppMainpage {

  public tweets: any;

  constructor(private springService: SpringService, private router: Router) {
    this.fetch()
  }

  fetch() {
    this.springService.fetchAllTweets().subscribe(
      data => {
        console.log('Tweets fetched');
        this.tweets = data;
      }
    );
  }

  flagTweet(id: any) {
    this.springService.flagTweet(id).subscribe(
      data => {
        console.log('Tweet flagged');
      }
    );
    this.router.navigate(['/profile']);
  }
}
