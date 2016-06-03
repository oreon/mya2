

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Customer}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class CustomerService extends BaseHttpService<Customer>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "customers";
  }

}
