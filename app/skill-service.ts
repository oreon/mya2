import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Skill}           from './employee';
import {Observable}     from 'rxjs/Observable';




@Injectable()
export class SkillService {
    constructor (private http: Http) {}
    private _heroesUrl = 'http://localhost:8000/api/v1/skills';  // URL to web api
    private skills : Skill[];

    getSkills (): Observable<Skill[]> {
      return this.http.get(this._heroesUrl)
                      .map(this.extractData)
                      .catch(this.handleError);
    }


    getSkill (id:number): Observable<Skill> {
      return this.http.get(this._heroesUrl + "/" + id)
                      .map(this.extractData)
                      .catch(this.handleError);
    }

    saveSkill (skill:Skill): Observable<Skill> {
      let body = JSON.stringify(skill);

      return this.http.patch(this._heroesUrl, body )
                      .map(this.extractData)
                      .catch(this.handleError);
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
