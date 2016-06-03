

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { CustomerOrder } from './customerOrder';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { CustomerOrderDetailComponent } from './CustomerOrderDetailComponent';

import { BaseListComponent} from '../common/BaseListComponent'
import { CustomerOrderService } from './CustomerOrderService';

import { CustomerService } from '../customer/customer-service';

import {Customer} from '../customer/customer'

let template = require('./listCustomerOrder.component.html');

@Component({
  selector: 'customerOrders',
  template: template,
  providers:[CustomerOrderService],
  directives: [CustomerOrderDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomerOrderListComponent extends BaseListComponent<CustomerOrder> implements OnInit {
  customerOrders:CustomerOrder[];
  selectedCustomerOrder:CustomerOrder;
  errorMessage:string;

  customerSelectables:Customer[];

  constructor(
  protected _customerService:CustomerService,
  protected _customerOrderService:CustomerOrderService) { super(_customerOrderService); }

  ngOnInit() {
    super.getBaseEntitys();
  }


//  gotoDetail() {this._router.navigate(['CustomerOrderDetail', { id: this.selectedCustomerOrder.id }]);}
}
