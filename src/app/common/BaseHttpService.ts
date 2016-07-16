import {Injectable, EventEmitter}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
//import 'rxjs/Rx';  // use this line if you want to be lazy, otherwise:
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';


import { contentHeaders } from '../common/headers';

import {AuthHttp, AuthConfig, AUTH_PROVIDERS, JwtHelper} from 'angular2-jwt';


import {BaseEntity}  from './BaseEntity'

@Injectable()
export abstract class BaseHttpService<T extends BaseEntity>{

  baseUrl = "http://localhost:8000/api/v1/"

  abstract getUrl(): string

  public itemAdded$: EventEmitter<T>;

  public options: RequestOptions;

  jwtHelper: JwtHelper = new JwtHelper();

  constructor(protected http: Http) {
    this.options = new RequestOptions({ headers: contentHeaders });
  }


  fullUrl(): string { return this.baseUrl + this.getUrl() }

  private _createAuthHeaders(): Headers {
    //let identityData = this.identity.user;
    let headers = new Headers({
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    });

    let jwt: string = localStorage.getItem('jwt')
    headers.append('Authorization', `Bearer ${jwt}`)
    return headers;
  }

  getRecords(): Observable<T[]> {
    //let headers = new Headers({ 'bearer':  localStorage.getItem('jwt') });

    var token = localStorage.getItem('jwt');

    if(token != null){
    console.log(
      this.jwtHelper.decodeToken(token), this.jwtHelper.getTokenExpirationDate(token), this.jwtHelper.isTokenExpired(token)
    );}

    return this.http.get(this.fullUrl(), this.getOptions())
      .map(this.extractData)
    //  .catch(this.handleError);
  }

  getById(id: number, complete: boolean = false): Observable<T> {

    let wurl = this.fullUrl() + (complete ? "Complete" : "Writable");
    return this.http.get(wurl + "/" + id, this.getOptions())
      .map(this.extractData)
    //.catch(this.handleError);
  }

   hdrs:Headers;

  getOptions(){
     if(this.hdrs == null)
     this.hdrs = this._createAuthHeaders();
    return { headers: this.hdrs }
  }

  save(customer: T): Observable<T> {
    let body = JSON.stringify(customer);
    let wurl = this.fullUrl() + "Writable";

    if (customer.id)
      return this.http.put(wurl + "/" + customer.id, body, this.getOptions())
        .map(this.extractData)
    //  .catch(this.handleError);
    else
      return this.http.post(wurl, body, this.options)
        .map(this.extractData)
    //.catch(this.handleError);
  }

  delete(customer: T): Observable<T> {

    return this.http.delete(this.fullUrl() + "/" + customer.id, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {

    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    console.log("got from httpservice" + body);
    //this.itemAdded$.emit(body);
    return (body.results != undefined) ? body.results : body || {}
    //return ;
  }

  private handleError(error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    if (!error.status || (error.status < 300 && error.status >= 200)) {
      return;
    }
    let userMsg = "error deleteing ";
    let errMsg = (error._body + error.status) || 'Server error';
    console.error(userMsg + " :" + errMsg); // log to console instead
    return Observable.throw(userMsg + " :" + errMsg);
  }
}
