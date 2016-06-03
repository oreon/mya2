

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {CustomerOrder}           from './customerOrder';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class CustomerOrderService extends BaseHttpService<CustomerOrder>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "customerOrders";
  }

}
