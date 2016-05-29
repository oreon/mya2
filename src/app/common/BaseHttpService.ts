import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Observable}     from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
//import 'rxjs/Rx';  // use this line if you want to be lazy, otherwise:
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';  // debug
import 'rxjs/add/operator/catch';

import {BaseEntity}  from './BaseEntity'

@Injectable()
export abstract class BaseHttpService<T extends BaseEntity>{

  constructor (protected http: Http) {}

  baseUrl = "http://localhost:8000/api/v1/"

  abstract getUrl():string

  fullUrl():string{   return this.baseUrl + this.getUrl() }

  getRecords (): Observable<T[]> {
    return this.http.get(this.fullUrl())
                    .map(this.extractData)
                  //  .catch(this.handleError);
  }

  getById (id:number): Observable<T> {
    console.log("calling " + id)
    return this.http.get(this.fullUrl() + "/" + id)
                    .map(this.extractData)
                    //.catch(this.handleError);
  }

  save(customer:T): Observable<T> {
    let body = JSON.stringify(customer);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    let wurl = this.fullUrl() + "Writable";

    if(customer.id)
      return this.http.put( wurl + "/" + customer.id, body , options)
                    .map(this.extractData)
                  //  .catch(this.handleError);
     else
        return  this.http.post(wurl, body , options)
                      .map(this.extractData)
                    //.catch(this.handleError);
  }

  delete(customer:T): Observable<T> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    console.log('calling http delete for ' + customer.id);

    return this.http.delete( this.fullUrl() + "/" + customer.id )
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {

    if (res.status < 200 || res.status >= 300) {
      throw new Error('Bad response status: ' + res.status);
    }
    let body = res.json();
    console.log("got from httpservice" + body);
    return body || { };
  }

  private handleError (error: any) {
    // In a real world app, we might send the error to remote logging infrastructure
    if(!error.status  || (error.status < 300 && error.status >= 200)  ){
      return;
    }
    let userMsg ="error deleteing ";
    let errMsg = (error._body + error.status) || 'Server error';
    console.error(userMsg + " :" + errMsg); // log to console instead
    return Observable.throw(userMsg + " :" + errMsg);
  }
}
