import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {User} from '../model/user';
import {Http} from '@angular/http';


@Injectable()
export class AuthenticationService {
  constructor(private http: Http) { }

  login(username: string, password: string) {
    // here should be some authentication request to backend
    return this.http.get('http://localhost:8080/app/hello').map(
      data => console.log('OK!')
    );
  }
}
