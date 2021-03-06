import {Component} from '@angular/core';
import {SpringService} from "../services";
import {Router} from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: './profile.component.html'
})

export class AppProfile {

  public tweets: any;
  public banner: any;
  model: any = {};

  constructor(private springService: SpringService, private router: Router) {
    this.springService.fetchUsersSettings().subscribe(
      data => {
        if (data > 0) {
          this.banner = "You are not watching offensive tweets, click here to change it."
        } else {
          this.banner = "You are watching offensive tweets, click here to change it."
        }
      }
    );
    this.fetchMyTweets();
  }

  tweet() {
    this.springService.tweet(this.model.new).subscribe(
      data => {
        console.log("Tweet has been added");
      }
    );
    this.router.navigate(['/main']);
  }

  fetchMyTweets() {
    this.springService.fetchAllUsersTweets().subscribe(
      data => {
        console.log('Users tweets fetched');
        this.tweets = data;
      }
    );
  }

  changeSettings() {
    this.springService.changeSettings().subscribe(
      data => {
        console.log("Settings changed");
        this.router.navigate(['/main']);
      }
    );
  }
}
