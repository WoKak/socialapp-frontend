import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AuthenticationService {

  currentuser: string;
  token: string;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {

    let httpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:3000').set('Token', '');

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

  main() {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'http://localhost:3000')
      .set('Token', this.token);

    return this.http.get('http://localhost:8443/main/message', {headers: httpHeaders}).map(
    data => {
      const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
      return response.tweet;
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

  isAuthenticated() {
    if (this.token.length != 0) {
      return true;
    } else {
      return false;
    }
  }
}
