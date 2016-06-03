

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Product}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class ProductService extends BaseHttpService<Product>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "products";
  }

}
