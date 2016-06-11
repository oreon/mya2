

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { OrderItemDetailComponent } from './OrderItemDetailComponent';


import { OrderItemService } from './OrderItemService';



	import {OrderItem} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
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
  orderItemList:OrderItem[];
  
  @Input()
  protected embedded:boolean = false
   
  orderItem:OrderItem;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _orderItemService:OrderItemService) { super(_orderItemService); }
  
  setRecords( orderItem:OrderItem[]){this.orderItemList = orderItem;} 
  getRecords():OrderItem[]{return this.orderItemList;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }
  
  getEmbedded():boolean{ return this.embedded}
  
  setRecord( orderItem:OrderItem){this.orderItem = orderItem;} 
  getRecord():OrderItem{return this.orderItem;}
   
  setViewRecord(orderItem:OrderItem){  }
  
  createInstance():OrderItem { return <OrderItem>{}; }
  getSuccessUrl():string { return 'OrderItems'}


//  gotoDetail() {this._router.navigate(['OrderItemDetail', { id: this.selectedOrderItem.id }]);}
}
