import {Injectable}     from '@angular/core';
import {Http, Response} from '@angular/http';
import {Skill}           from '../employee/employee';
import {Observable}     from 'rxjs/Observable';

import { SkillService } from '../skill/skill-service';

@Injectable()
export class DBService {
    private skills : Skill[] ;

    constructor (
      private _skillService:SkillService) {
    }


  getCahcedSkills():Observable<Skill[]> {
       if (this.skills != null ){
         return Observable.create(this.skills, (k)=>k);
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
