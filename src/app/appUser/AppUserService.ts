

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {AppUser}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class AppUserService extends BaseHttpService<AppUser>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "appUsers";
  }

}
