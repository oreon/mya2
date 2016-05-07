import { Injectable } from 'angular2/core';
import { Http, Headers } from 'angular2/http';

@Injectable()
export class ProfileService {
  constructor(private http: Http) { }

  getProfile() {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let authToken = localStorage.getItem('auth_token');
    headers.append('Authorization', `Bearer ${authToken}`);

    return this.http
      .get('/profile', { headers: headers })
      .map(res => res.json());
  }
}
