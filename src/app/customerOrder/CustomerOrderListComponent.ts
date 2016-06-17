

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CustomerOrderDetailComponent } from './CustomerOrderDetailComponent';


import { CustomerOrderService } from './CustomerOrderService';



	import {CustomerOrder} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	import {CustomerService} from '../customer/CustomerService'
	import {Customer} from '../common/AppEntities';
	
	
	
	import {OrderItemEditComponent} from '../orderItem/OrderItemEditComponent';
	import {OrderItemListComponent} from '../orderItem/OrderItemListComponent';
	import {OrderItem} from '../common/AppEntities';
	



let template = require('./CustomerOrderListComponent.html');

@Component({
  selector: 'customerOrder-list',
  template: template,
  inputs:['parent', 'embedded'],
  providers:[CustomerOrderService],
  directives: [OrderItemListComponent,CustomerOrderDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomerOrderListComponent extends BaseListComponent<CustomerOrder> implements OnInit {

  @Input()
  customerOrderList:CustomerOrder[];
   
  customerOrder:CustomerOrder;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _customerOrderService:CustomerOrderService) { super(_customerOrderService); }
  
  setRecords( customerOrder:CustomerOrder[]){this.customerOrderList = customerOrder;} 
  getRecords():CustomerOrder[]{return this.customerOrderList;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }
  
  getEmbedded():boolean{ return this.embedded}
  
  setRecord( customerOrder:CustomerOrder){this.customerOrder = customerOrder;} 
  getRecord():CustomerOrder{return this.customerOrder;}
   
  setViewRecord(customerOrder:CustomerOrder){  }
  
  createInstance():CustomerOrder { return <CustomerOrder>{}; }
  getSuccessUrl():string { return 'CustomerOrders'}


//  gotoDetail() {this._router.navigate(['CustomerOrderDetail', { id: this.selectedCustomerOrder.id }]);}
}
