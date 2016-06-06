
import {Customer} from '../common/AppEntities';
 

import {CustomerOrderDetailComponent} from '../customerOrder/CustomerOrderDetailComponent';
import {CustomerOrder} from '../common/AppEntities';

import {CustomerReviewDetailComponent} from '../customerReview/CustomerReviewDetailComponent';
import {CustomerReview} from '../common/AppEntities';

import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { CustomerService } from './CustomerService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'customer-view',
  templateUrl: './app/customer/customerViewComponent.html',
  directives: [  CustomerOrderDetailComponent ,CustomerReviewDetailComponent ]
})
export class CustomerViewComponent22  extends BaseDetailComponent<Customer> implements OnInit {
  
  @Input()
  customer: Customer;
  
  @Input()
  protected embedded:boolean = false
  
  
   //customerOrders : CustomerOrder[]
  
   //customerReviews : CustomerReview[]
  
  
  
  constructor(
  	
    protected _customerService: CustomerService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _customerService,  _routeParams, _router);
  }
  
   setRecord( customer:Customer){this.customer = customer;} 
   getRecord():Customer{return this.customer;}
  
  createInstance():Customer { return <Customer>{}; }
  getSuccessUrl():string { return 'Customers'}
  
  ngOnInit() {
    super.ngOnInit();  
  }
  

}
