

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CustomerReviewDetailComponent } from './CustomerReviewDetailComponent';


import { CustomerReviewService } from './CustomerReviewService';
import {CustomerReview} from '../common/AppEntities.ts';

let template = require('./CustomerReviewListComponent.html');

@Component({
  selector: 'customerReview-list',
  template: template,
  providers:[CustomerReviewService],
  directives: [CustomerReviewDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomerReviewListComponent extends BaseListComponent<CustomerReview> implements OnInit {

  @Input()
  customerReviews:CustomerReview[];
  
  selectedCustomerReview:CustomerReview;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _customerReviewService:CustomerReviewService) { super(_customerReviewService); }
  
  setRecords( customerReview:CustomerReview[]){this.customerReviews = customerReview;} 
  getRecords():CustomerReview[]{return this.customerReviews;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['CustomerReviewDetail', { id: this.selectedCustomerReview.id }]);}
}
