

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { OrderItemDetailComponent } from './OrderItemDetailComponent';


import { OrderItemService } from './OrderItemService';
import {OrderItem} from '../common/AppEntities.ts';

let template = require('./OrderItemListComponent.html');

@Component({
  selector: 'orderItem-list',
  template: template,
  providers:[OrderItemService],
  directives: [OrderItemDetailComponent, ROUTER_DIRECTIVES]
})
export class OrderItemListComponent extends BaseListComponent<OrderItem> implements OnInit {
  orderItems:OrderItem[];
  selectedOrderItem:OrderItem;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _orderItemService:OrderItemService) { super(_orderItemService); }
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['OrderItemDetail', { id: this.selectedOrderItem.id }]);}
}
