

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Employee}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class EmployeeService extends BaseHttpService<Employee>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "employees";
  }

}
