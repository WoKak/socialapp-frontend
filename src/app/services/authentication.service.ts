import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AuthenticationService {
  //
  currentuser: string;
  //
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {

    let httpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:3000').set('Token', '');
    // here should be some authentication request to backend
    return this.http.post('http://localhost:8443/auth/get-token', {username: username, password: password}, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        this.currentuser = response.username;
        return response.token;
      }
    );
  }
}
