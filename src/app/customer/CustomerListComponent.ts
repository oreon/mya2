

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CustomerDetailComponent } from './CustomerDetailComponent';


import { CustomerService } from './CustomerService';



	import {Customer} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	
	
	import {CustomerOrderEditComponent} from '../customerOrder/CustomerOrderEditComponent';
	import {CustomerOrderListComponent} from '../customerOrder/CustomerOrderListComponent';
	import {CustomerOrder} from '../common/AppEntities';
	
	import {CustomerReviewEditComponent} from '../customerReview/CustomerReviewEditComponent';
	import {CustomerReviewListComponent} from '../customerReview/CustomerReviewListComponent';
	import {CustomerReview} from '../common/AppEntities';
	



let template = require('./CustomerListComponent.html');

@Component({
  selector: 'customer-list',
  template: template,
  inputs:['parent', 'embedded'],
  providers:[CustomerService],
  directives: [CustomerOrderListComponent,CustomerReviewListComponent,CustomerDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomerListComponent extends BaseListComponent<Customer> implements OnInit {

  @Input()
  customerList:Customer[];
   
  customer:Customer;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _customerService:CustomerService) { super(_customerService); }
  
  setRecords( customer:Customer[]){this.customerList = customer;} 
  getRecords():Customer[]{return this.customerList;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }
  
  getEmbedded():boolean{ return this.embedded}
  
  setRecord( customer:Customer){this.customer = customer;} 
  getRecord():Customer{return this.customer;}
   
  setViewRecord(customer:Customer){  }
  
  createInstance():Customer { return <Customer>{}; }
  getSuccessUrl():string { return 'Customers'}


//  gotoDetail() {this._router.navigate(['CustomerDetail', { id: this.selectedCustomer.id }]);}
}
