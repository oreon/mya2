

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Customer}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

import {AuthHttp} from 'angular2-jwt';

@Injectable()
export class CustomerService extends BaseHttpService<Customer>{

  constructor (protected http: Http) { 
    super(http); 
    console.log("constructing cust service");
  }

  getUrl():string{
    return "customers";
  }

}
