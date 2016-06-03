

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CustomerOrderDetailComponent } from './CustomerOrderDetailComponent';


import { CustomerOrderService } from './CustomerOrderService';
import {CustomerOrder} from '../common/AppEntities.ts';

let template = require('./CustomerOrderListComponent.html');

@Component({
  selector: 'customerOrder-list',
  template: template,
  providers:[CustomerOrderService],
  directives: [CustomerOrderDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomerOrderListComponent extends BaseListComponent<CustomerOrder> implements OnInit {
  customerOrders:CustomerOrder[];
  selectedCustomerOrder:CustomerOrder;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _customerOrderService:CustomerOrderService) { super(_customerOrderService); }
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['CustomerOrderDetail', { id: this.selectedCustomerOrder.id }]);}
}
