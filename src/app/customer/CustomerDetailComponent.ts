



import {Customer} from '../common/AppEntities';
import {CustomerOrder} from '../common/AppEntities';
import {CustomerReview} from '../common/AppEntities';




import {CustomerOrderDetailComponent} from '../customerOrder/CustomerOrderDetailComponent'

import {CustomerReviewDetailComponent} from '../customerReview/CustomerReviewDetailComponent'



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

//import { Customer } from './Customer';
import { CustomerService } from './CustomerService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'customer-detail',
  templateUrl: './app/customer/customerDetailComponent.html',
  //providers:[CustomerService]
  directives: [  CustomerOrderDetailComponent ,CustomerReviewDetailComponent ]
})
export class CustomerDetailComponent  extends BaseDetailComponent<Customer> implements OnInit {
  
  @Input()
  customer: Customer;
  
   setRecord( customer:Customer){this.customer = customer;} 
   getRecord():Customer{return this.customer;}
   //customerOrders : CustomerOrder[]
  
   //customerReviews : CustomerReview[]
  
  
  
  
  constructor(
  	
    protected _customerService: CustomerService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _customerService,  _routeParams, _router);
  }
  
  
  createInstance():Customer { return  <Customer>{};}
  getSuccessUrl():string { return 'Customers'}
 
  
  
  ngOnInit() {
    super.ngOnInit();
  }
  
  
  
  
  addCustomerOrder(){
    console.log('new order')
  this.customer.customerOrder.push(<CustomerOrder>{});
  }

  removeCustomerOrder(index:number){
    this.customer.customerOrder.splice(index, 1);
  }

  onCustomerOrderChanged(newValue, index) {
    console.log(newValue);
  }
  
  addCustomerReview(){
   console.log('new review')
  this.customer.customerReview.push(<CustomerReview>{});
  }

  removeCustomerReview(index:number){
    this.customer.customerReview.splice(index, 1);
  }

  onCustomerReviewChanged(newValue, index) {
    console.log(newValue);
  }
  


}
