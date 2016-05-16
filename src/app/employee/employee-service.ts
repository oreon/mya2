import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Employee}           from './employee';
import {Skill}           from './employee';

import {Observable}     from 'rxjs/Observable';




@Injectable()
export class EmployeeService {
    constructor (private http: Http) {}
    private _heroesUrl = 'http://localhost:8000/api/v1/employees';  // URL to web api

    getEmployees (): Observable<Employee[]> {
      return this.http.get(this._heroesUrl)
                      .map(this.extractData)
                    //  .catch(this.handleError);
    }

    getEmployee (id:number): Observable<Employee> {
      return this.http.get(this._heroesUrl + "/" + id)
                      .map(this.extractData)
                      //.catch(this.handleError);
    }

    saveEmployee (employee:Employee): Observable<Employee> {
      let body = JSON.stringify(employee);

      return this.http.patch(this._heroesUrl, body )
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
