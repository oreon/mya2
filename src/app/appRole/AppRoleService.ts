

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {AppRole}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class AppRoleService extends BaseHttpService<AppRole>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "appRoles";
  }

}
