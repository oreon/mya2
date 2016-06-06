

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CustomerOrderDetailComponent } from './CustomerOrderDetailComponent';
import {OrderItemListComponent} from '../orderItem/OrderItemListComponent'

import { CustomerOrderService } from './CustomerOrderService';
import {CustomerOrder} from '../common/AppEntities.ts';

let template = require('./CustomerOrderListComponent.html');

@Component({
  selector: 'customerOrder-list',
  template: template,
  providers:[CustomerOrderService],
  directives: [CustomerOrderDetailComponent, OrderItemListComponent, ROUTER_DIRECTIVES]
})
export class CustomerOrderListComponent extends BaseListComponent<CustomerOrder> implements OnInit {

  @Input()
  customerOrders:CustomerOrder[];
  
  selectedCustomerOrder:CustomerOrder;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _customerOrderService:CustomerOrderService) { super(_customerOrderService); }
  
  setRecords( customerOrder:CustomerOrder[]){this.customerOrders = customerOrder;} 
  getRecords():CustomerOrder[]{return this.customerOrders;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['CustomerOrderDetail', { id: this.selectedCustomerOrder.id }]);}
}
