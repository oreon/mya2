

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CustomerReviewDetailComponent } from './CustomerReviewDetailComponent';


import { CustomerReviewService } from './CustomerReviewService';



	import {CustomerReview} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	import {CustomerService} from '../customer/CustomerService'
	import {Customer} from '../common/AppEntities';
	
	
	



let template = require('./CustomerReviewListComponent.html');

@Component({
  selector: 'customerReview-list',
  template: template,
  providers:[CustomerReviewService],
  directives: [CustomerReviewDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomerReviewListComponent extends BaseListComponent<CustomerReview> implements OnInit {

  @Input()
  customerReviewList:CustomerReview[];
  
  @Input()
  protected embedded:boolean = false
   
  customerReview:CustomerReview;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _customerReviewService:CustomerReviewService) { super(_customerReviewService); }
  
  setRecords( customerReview:CustomerReview[]){this.customerReviewList = customerReview;} 
  getRecords():CustomerReview[]{return this.customerReviewList;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }
  
  getEmbedded():boolean{ return this.embedded}
  
  setRecord( customerReview:CustomerReview){this.customerReview = customerReview;} 
  getRecord():CustomerReview{return this.customerReview;}
   
  setViewRecord(customerReview:CustomerReview){  }
  
  createInstance():CustomerReview { return <CustomerReview>{}; }
  getSuccessUrl():string { return 'CustomerReviews'}


//  gotoDetail() {this._router.navigate(['CustomerReviewDetail', { id: this.selectedCustomerReview.id }]);}
}
