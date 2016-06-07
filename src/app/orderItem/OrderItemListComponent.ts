

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { OrderItemDetailComponent } from './OrderItemDetailComponent';


import { OrderItemService } from './OrderItemService';



import {OrderItem} from '../common/AppEntities';
  

import {CustomerOrderService} from '../customerOrder/CustomerOrderService'
import {CustomerOrder} from '../common/AppEntities';

import {ProductService} from '../product/ProductService'
import {Product} from '../common/AppEntities';





let template = require('./OrderItemListComponent.html');

@Component({
  selector: 'orderItem-list',
  template: template,
  providers:[OrderItemService],
  directives: [OrderItemDetailComponent, ROUTER_DIRECTIVES]
})
export class OrderItemListComponent extends BaseListComponent<OrderItem> implements OnInit {

  @Input()
  orderItems:OrderItem[];
  
  @Input()
  protected embedded:boolean = false
  
  selectedOrderItem:OrderItem;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _orderItemService:OrderItemService) { super(_orderItemService); }
  
  setRecords( orderItem:OrderItem[]){this.orderItems = orderItem;} 
  getRecords():OrderItem[]{return this.orderItems;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['OrderItemDetail', { id: this.selectedOrderItem.id }]);}
}
