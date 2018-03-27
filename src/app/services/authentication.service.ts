import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FriendsService} from "./friends.service";
import {TweetService} from "./tweet.service";
import {SettingsService} from "./settings.service";


@Injectable()
export class AuthenticationService {

  currentUser: string;
  token: string;

  constructor(private http: HttpClient,
              private friendsService: FriendsService,
              private tweetService: TweetService,
              private settingsService: SettingsService) {
  }

  login(username: string, password: string) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', '');

    return this.http.post(
      'https://localhost:8443/auth/login',
      {username: username, password: password},
      {headers: httpHeaders}
    ).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        this.currentUser = response.username;
        this.token = response.token;
        return response.token;
      }
    );
  }

  logout() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', this.token);

    return this.http.post(
      'https://localhost:8443/auth/logout',
      {username: this.currentUser, token: this.token},
      {headers: httpHeaders}
    ).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        this.token = '';
        return response.user;
      }
    );
  }

  register(username: string, password: string) {

    let httpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', 'https://localhost:4200').set('Token', '');

    return this.http.post(
      'https://localhost:8443/auth/register',
      {username: username, password: password},
      {headers: httpHeaders}
    ).map(
      data => {
        return username;
      }
    );
  }

  isAuthenticated() {
    return this.token.length != 0;
  }

  fetchUsersSettings() {
    return this.settingsService.fetchUsersSettings(this.token, this.currentUser);
  }

  changeSettings() {
    return this.settingsService.changeSettings(this.token, this.currentUser);
  }

  tweet(tweet: string) {
    return this.tweetService.tweet(this.token, this.currentUser, tweet);
  }

  fetchAllTweets() {
    return this.tweetService.fetchAllTweets(this.token, this.currentUser);
  }

  fetchAllUsersTweets() {
    return this.tweetService.fetchAllUsersTweets(this.token, this.currentUser);
  }

  fetchFriends() {
    return this.friendsService.fetchFriends(this.token, this.currentUser);
  }

  addFriend(friendname: string) {
    return this.friendsService.addFriend(this.token, this.currentUser, friendname);
  }

  removeFriend(friend: any) {
    return this.friendsService.removeFriend(this.token, this.currentUser, friend);
  }

  flagTweet(id: any) {
    return this.tweetService.flagTweet(this.token, id);
  }
}
