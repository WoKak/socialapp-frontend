import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable()
export class FriendsService {

  constructor(private http: HttpClient) {
  }


  fetchFriends(token: string, currentUser: string) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', token);
    return this.http.get('https://localhost:8443/friends/fetch-friends/' + currentUser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

  addFriend(token: string, currentUser: string, friendname: string) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', token);

    return this.http.get(
      'https://localhost:8443/friends/add-friend/' + currentUser + "/" + friendname,
      {headers: httpHeaders}
    )
      .map(
        data => {
          const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
          return response.owner;
        }
      );
  }

  removeFriend(token: string, currentUser: string, friend: any) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', token);

    return this.http.get(
      'https://localhost:8443/friends/remove-friend/' + currentUser + "/" + friend,
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
