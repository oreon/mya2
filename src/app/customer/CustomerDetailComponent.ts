



import {Customer} from '../common/AppEntities';
  



import {CustomerOrderDetailComponent} from '../customerOrder/CustomerOrderDetailComponent';
import {CustomerOrderListComponent} from '../customerOrder/CustomerOrderListComponent';
import {CustomerOrder} from '../common/AppEntities';

import {CustomerReviewDetailComponent} from '../customerReview/CustomerReviewDetailComponent';
import {CustomerReviewListComponent} from '../customerReview/CustomerReviewListComponent';
import {CustomerReview} from '../common/AppEntities';



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { CustomerService } from './CustomerService';
import { CustomerEditComponent } from './CustomerEditComponent';


import { BaseDetailComponent } from '../common/BaseDetailComponent';
import { EventService} from '../common/EventService'


@Component({
  selector: 'customer-detail',
  templateUrl: './app/customer/customerDetailComponent.html',
  //providers:[CustomerService]
  directives: [  CustomerEditComponent, CustomerOrderDetailComponent, CustomerOrderListComponent  ,CustomerReviewDetailComponent, CustomerReviewListComponent  ]
})
export class CustomerDetailComponent  extends BaseDetailComponent<Customer> implements OnInit {
  
  @Input()
  customer: Customer;
  
  @Input()
  customerView: Customer;

  @Input()
  protected embedded:boolean = false
  
  constructor(
  	protected _eventService:EventService<Customer>,
    protected _customerService: CustomerService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _customerService,  _routeParams, _router);
    _eventService.itemAdded$
     //.filter(item => item.constructor ==  Array)
     .subscribe(item => {  super.fetchViewRecord(item.id) ; this.editMode = false;})
  }
  
   setRecord( customer:Customer){this.customer = customer;} 
   getRecord():Customer{return this.customer;}
   
  setViewRecord(customer:Customer){  
    this.customerView = customer;
  }
  
  createInstance():Customer { return <Customer>{}; }
  getSuccessUrl():string { return 'Customers'}
  
  ngOnInit() {
    super.ngOnInit();
  }

 
  

}
