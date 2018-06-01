import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {r} from "@angular/core/src/render3";


@Injectable()
export class TweetService {

  constructor(private http: HttpClient) {
  }

  tweet(token: string, currentUser: string, tweet: string) {

    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', token);

    return this.http.post(
      'https://localhost:8443/profile/tweet',
      {owner: currentUser, tweet: tweet},
      {headers: httpHeaders}
    )
      .map(
        data => {
          const response = JSON.parse(JSON.stringify(data['entity'], null, 4));

          let headers = new HttpHeaders()
            .set('Access-Control-Allow-Origin', 'https://localhost:4200');

          this.http.post('https://localhost:5000/api/new-posts', {posts: response}, {headers: headers})
            .subscribe();

          return response;
        }
      );
  }

  fetchAllTweets(token: string, currentUser: string) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', token);

    return this.http.get('https://localhost:8443/main/fetch-tweets/' + currentUser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

  fetchAllUsersTweets(token: string, currentUser: string) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', token);

    return this.http.get('https://localhost:8443/profile/fetch-users-tweets/' + currentUser, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }

  flagTweet(token: string, id: any) {
    let httpHeaders = new HttpHeaders()
      .set('Access-Control-Allow-Origin', 'https://localhost:4200')
      .set('Token', token);

    return this.http.get('https://localhost:8443/main/flag-tweet/' + id, {headers: httpHeaders}).map(
      data => {
        const response = JSON.parse(JSON.stringify(data['entity'], null, 4));
        return response;
      }
    )
  }
}
