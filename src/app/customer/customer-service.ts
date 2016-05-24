import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Customer}           from './customer';

import {Observable}     from 'rxjs/Observable';

@Injectable()
export class CustomerService {
    constructor (private http: Http) {}
    private _heroesUrl = 'http://localhost:8000/api/v1/customers';  // URL to web api

    getCustomers (): Observable<Customer[]> {
      return this.http.get(this._heroesUrl)
                      .map(this.extractData)
                    //  .catch(this.handleError);
    }

    getCustomer (id:number): Observable<Customer> {
      console.log("calling " + id)
      return this.http.get(this._heroesUrl + "/" + id)
                      .map(this.extractData)
                      //.catch(this.handleError);
    }

    saveCustomer (customer:Customer): Observable<Customer> {
      let body = JSON.stringify(customer);
      console.log(body)
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

      if(customer.id)
        return this.http.put(this._heroesUrl  + "/" + customer.id, body , options)
                      .map(this.extractData)
       else
          return  this.http.post(this._heroesUrl, body , options)
                        .map(this.extractData)
                      //.catch(this.handleError);
    }

    private extractData(res: Response) {

      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad response status: ' + res.status);
      }
      let body = res.json();
      console.log(body);
      return body || { };
    }
    private handleError (error: any) {
      // In a real world app, we might send the error to remote logging infrastructure
      let errMsg = error.message || 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }

}
