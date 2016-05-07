import {Injectable}     from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Skill}           from './employee';
import {Observable}     from 'rxjs/Observable';

import { SkillService } from './skill-service';

@Injectable()
export class DBService {
    private skills : Skill[] ;

    constructor (
      private _skillService:SkillService) {
    }


  getCahcedSkills():Observable<Skill[]> {
       if (this.skills != null ){
         return Observable.from(this.skills, (k)=>k);
      }
        return   this._skillService.getSkills();
        //}
        //console.log("found skils" + this.skills);

    }

    private extractData(skls:Skill[]) {



    }


    private handleError (error: any) {
      // In a real world app, we might send the error to remote logging infrastructure
      let errMsg = error.message || 'Server error';
      console.error(errMsg); // log to console instead
      return Observable.throw(errMsg);
    }


}
