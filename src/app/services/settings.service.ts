import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class SettingsService {

  constructor(private http: HttpClient) {
  }

  fetchUsersSettings(token: string, currentUser: string) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', token);

    return this.http.get('https://localhost:8443/profile/fetch-users-settings/' + currentUser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

  changeSettings(token: string, currentUser: string) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', token);

    return this.http.get('https://localhost:8443/profile/change-users-settings/' + currentUser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

}
