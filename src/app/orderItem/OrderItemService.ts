

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {OrderItem}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class OrderItemService extends BaseHttpService<OrderItem>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "orderItems";
  }

}
