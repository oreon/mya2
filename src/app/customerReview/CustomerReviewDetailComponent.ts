



import {CustomerReview} from '../common/AppEntities';
  

import {CustomerService} from '../customer/CustomerService'
import {Customer} from '../common/AppEntities';





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { CustomerReviewService } from './CustomerReviewService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'customerReview-detail',
  templateUrl: './app/customerReview/customerReviewDetailComponent.html',
  //providers:[CustomerReviewService]
  directives: [  ]
})
export class CustomerReviewDetailComponent  extends BaseDetailComponent<CustomerReview> implements OnInit {
  
  @Input()
  customerReview: CustomerReview;
  
  @Input()
  customerReviewView: CustomerReview;
  
  
  @Input()
  protected embedded:boolean = false
  
  
  
    
  customers : Customer[]
  
  
  constructor(
  
    protected _customerService: CustomerService ,
    
    protected _customerReviewService: CustomerReviewService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _customerReviewService,  _routeParams, _router);
  }
  
   setRecord( customerReview:CustomerReview){this.customerReview = customerReview;} 
   getRecord():CustomerReview{return this.customerReview;}
   
   setViewRecord(customerReview:CustomerReview){this.customerReviewView = customerReview;}
  
  createInstance():CustomerReview { return <CustomerReview>{}; }
  getSuccessUrl():string { return 'CustomerReviews'}
  
  ngOnInit() {
    super.ngOnInit();
  
    this._customerService.getRecords().subscribe(records =>this.customers = records);
    
  }
  
    
   onCustomerChanged(newValue, index) {
    this.getRecord().customer = newValue;
  }
  
  
  


}
