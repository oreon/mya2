



import {Customer} from '../common/AppEntities';
  

import {CustomerOrderListComponent} from '../customerOrder/CustomerOrderListComponent';

import {CustomerOrderDetailComponent} from '../customerOrder/CustomerOrderDetailComponent';
import {CustomerOrder} from '../common/AppEntities';

import {CustomerReviewDetailComponent} from '../customerReview/CustomerReviewDetailComponent';
import {CustomerReview} from '../common/AppEntities';



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { CustomerService } from './CustomerService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'customer-detail',
  templateUrl: './app/customer/customerDetailComponent.html',
  //providers:[CustomerService]
  directives: [ CustomerOrderListComponent, CustomerOrderDetailComponent ,CustomerReviewDetailComponent ]
})
export class CustomerDetailComponent  extends BaseDetailComponent<Customer> implements OnInit {
  
  @Input()
  customer: Customer;
  
  @Input()
  customerView: Customer;
 
  @Input()
  protected embedded:boolean = false
  
  constructor(
  	
    protected _customerService: CustomerService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _customerService,  _routeParams, _router);
  }
  
   setRecord( customer:Customer){this.customer = customer;} 
   getRecord():Customer{return this.customer;}
   
   setViewRecord(customer:Customer){this.customerView = customer;} 
  
  createInstance():Customer { return <Customer>{}; }
  getSuccessUrl():string { return 'Customers'}
  
  ngOnInit() {
    super.ngOnInit();
  }
  
  addCustomerOrder(){
   if(!this.customer.customerOrder) this.customer.customerOrder = [];
   this.customer.customerOrder.push(<CustomerOrder>{});
  }

  removeCustomerOrder(index:number){
    this.customer.customerOrder.splice(index, 1);
  }

  onCustomerOrderChanged(newValue, index) {console.log(newValue);}
  
  addCustomerReview(){
   if(!this.customer.customerReview) this.customer.customerReview = [];
   this.customer.customerReview.push(<CustomerReview>{});
  }

  removeCustomerReview(index:number){
    this.customer.customerReview.splice(index, 1);
  }

  onCustomerReviewChanged(newValue, index) {console.log(newValue);}
  


}
