import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {User} from '../model/user';


@Injectable()
export class AuthenticationService {
  constructor() { }

  login(username: string, password: string) {
    // here should be some authentication request to backend
  }
}
