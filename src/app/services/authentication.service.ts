import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AuthenticationService {

  currentuser: string;
  token: string;

  constructor(private http: HttpClient) {
  }

  login(username: string, password: string) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', '');

    return this.http.post(
      'http://localhost:8443/auth/login',
      {username: username, password: password},
      {headers: httpHeaders}
    )
      .map(
        data => {
          const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
          this.currentuser = response.username;
          this.token = response.token;
          return response.token;
        }
      );
  }

  tweet(tweet: string) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);

    return this.http.post(
      'http://localhost:8443/profile/tweet',
      {owner: this.currentuser, tweet: tweet},
      {headers: httpHeaders}
    )
      .map(
        data => {
          const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
          return response.owner;
        }
      );
  }

  fetchAllTweets() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);

    return this.http.get('http://localhost:8443/main/fetch-tweets/' + this.currentuser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

  fetchAllUsersTweets() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);

    return this.http.get('http://localhost:8443/profile/fetch-users-tweets/' + this.currentuser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

  logout() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);

    return this.http.post(
      'http://localhost:8443/auth/logout',
      {username: this.currentuser, token: this.token},
      {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        this.token = '';
        return response.user;
      }
    )
  }

  register(username: string, password: string) {

    let httpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:3000').set('Token', '');

    return this.http.post(
      'http://localhost:8443/auth/register',
      {username: username, password: password},
      {headers: httpHeaders}
    )
      .map(
        data => {
          return username;
        }
      );
  }

  isAuthenticated() {
    if (this.token.length != 0) {
      return true;
    } else {
      return false;
    }
  }

  fetchUsersSettings() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);

    return this.http.get('http://localhost:8443/profile/fetch-users-settings/' + this.currentuser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

  changeSettings() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);

    return this.http.get('http://localhost:8443/profile/change-users-settings/' + this.currentuser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

  fetchFriends() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);
    return this.http.get('http://localhost:8443/friends/fetch-friends/' + this.currentuser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

  addFriend(friendname: String) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);

    return this.http.get(
      'http://localhost:8443/friends/add-friend/' + this.currentuser + "/" + friendname,
      {headers: httpHeaders}
    )
      .map(
        data => {
          const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
          return response.owner;
        }
      );
  }

  removeFriend(friend: any) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);

    return this.http.get(
      'http://localhost:8443/friends/remove-friend/' + this.currentuser + "/" + friend,
      {headers: httpHeaders}
    )
      .map(
        data => {
          const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
          return response.owner;
        }
      );
  }
}
