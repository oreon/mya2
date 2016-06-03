

import {Injectable}     from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

import {CustomerReview}           from '../common/AppEntities.ts';
import {BaseHttpService} from '../common/BaseHttpService';

@Injectable()
export class CustomerReviewService extends BaseHttpService<CustomerReview>{

  constructor (protected http: Http) {  super(http);}

  getUrl():string{
    return "customerReviews";
  }

}
