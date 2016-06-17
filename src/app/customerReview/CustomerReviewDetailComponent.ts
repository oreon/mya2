



	import {CustomerReview} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	import {CustomerService} from '../customer/CustomerService'
	import {Customer} from '../common/AppEntities';
	
	
	



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { CustomerReviewService } from './CustomerReviewService';
import { CustomerReviewEditComponent} from './CustomerReviewEditComponent';
import { BaseDetailComponent } from '../common/BaseDetailComponent';

@Component({
  selector: 'customerReview-detail',
  templateUrl: './app/customerReview/customerReviewDetailComponent.html',
  //providers:[CustomerReviewService]
  directives: [ CustomerReviewEditComponent, ]
})
export class CustomerReviewDetailComponent  extends BaseDetailComponent<CustomerReview> implements OnInit {
  
  @Input()
  customerReview: CustomerReview;
  
  @Input()
  customerReviewView: CustomerReview;

  @Input()
  protected embedded:boolean = false
  
  constructor(
  	protected _eventService:EventService<CustomerReview>,
    protected _customerReviewService: CustomerReviewService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _eventService, _customerReviewService,  _routeParams, _router);
  }
  
   setRecord( customerReview:CustomerReview){this.customerReview = customerReview;} 
   getRecord():CustomerReview{return this.customerReview;}
   
   setViewRecord(customerReview:CustomerReview){  this.customerReviewView = customerReview;}
   
   
 createInstance():CustomerReview { 
 	
    if (this.parent){
       return <CustomerReview>{customer:<any>this.parent}
    }
    
    return <CustomerReview>{}; 
  }

  getSuccessUrl():string { 
  	
    if (this.parent){
      return '/CustomerDetail'  
    }
    
    return 'CustomerReviews'
  }

  
  ngOnInit() {
    super.ngOnInit();
  }

}
