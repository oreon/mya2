



	import {OrderItem} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	import {CustomerOrderService} from '../customerOrder/CustomerOrderService'
	import {CustomerOrder} from '../common/AppEntities';
	
	import {ProductService} from '../product/ProductService'
	import {Product} from '../common/AppEntities';
	
	
	



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { OrderItemService } from './OrderItemService';
import { OrderItemEditComponent} from './OrderItemEditComponent';
import { BaseDetailComponent } from '../common/BaseDetailComponent';

@Component({
  selector: 'orderItem-detail',
  templateUrl: './app/orderItem/orderItemDetailComponent.html',
  //providers:[OrderItemService]
  directives: [ OrderItemEditComponent, ]
})
export class OrderItemDetailComponent  extends BaseDetailComponent<OrderItem> implements OnInit {
  
  @Input()
  orderItem: OrderItem;
  
  @Input()
  orderItemView: OrderItem;

  @Input()
  protected embedded:boolean = false
  
  constructor(
  	protected _eventService:EventService<OrderItem>,
    protected _orderItemService: OrderItemService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _eventService, _orderItemService,  _routeParams, _router);
  }
  
   setRecord( orderItem:OrderItem){this.orderItem = orderItem;} 
   getRecord():OrderItem{return this.orderItem;}
   
   setViewRecord(orderItem:OrderItem){  this.orderItemView = orderItem;}
   
   
 createInstance():OrderItem { 
 	
    if (this.parent){
       return <OrderItem>{customerOrder:<any>this.parent}
    }
    
    return <OrderItem>{}; 
  }

  getSuccessUrl():string { 
  	
    if (this.parent){
      return '/CustomerOrderDetail'  
    }
    
    return 'OrderItems'
  }

  
  ngOnInit() {
    super.ngOnInit();
  }

}
