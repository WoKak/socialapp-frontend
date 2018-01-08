import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {User} from '../model/user';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class AuthenticationService {
  constructor(private http: HttpClient) { }

  login(username: string, password: string) {

    let httpHeaders = new HttpHeaders().set('Access-Control-Allow-Origin', 'http://localhost:3000');
    // here should be some authentication request to backend
    return this.http.get('http://localhost:8080/app/hello', {headers: httpHeaders}).map(
      data => {
        console.log(data); // need some improvement with logging
      }
    );
  }
}
