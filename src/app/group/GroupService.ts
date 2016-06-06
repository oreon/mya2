

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Group}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class GroupService extends BaseHttpService<Group>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "groups";
  }

}
