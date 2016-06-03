

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {Category}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class CategoryService extends BaseHttpService<Category>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "categorys";
  }

}
