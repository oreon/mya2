



import {OrderItem} from '../common/AppEntities';
  

import {CustomerOrderService} from '../customerOrder/CustomerOrderService'
import {CustomerOrder} from '../common/AppEntities';

import {ProductService} from '../product/ProductService'
import {Product} from '../common/AppEntities';





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { OrderItemService } from './OrderItemService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'orderItem-detail',
  templateUrl: './app/orderItem/orderItemDetailComponent.html',
  //providers:[OrderItemService]
  directives: [  ]
})
export class OrderItemDetailComponent  extends BaseDetailComponent<OrderItem> implements OnInit {
  
  @Input()
  orderItem: OrderItem;
  
  @Input()
  orderItemView: OrderItem;
  
  
  @Input()
  protected embedded:boolean = false
  
  
  
    
  customerOrders : CustomerOrder[]
    
  products : Product[]
  
  
  constructor(
  
    protected _customerOrderService: CustomerOrderService ,
  
    protected _productService: ProductService ,
    
    protected _orderItemService: OrderItemService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _orderItemService,  _routeParams, _router);
  }
  
   setRecord( orderItem:OrderItem){this.orderItem = orderItem;} 
   getRecord():OrderItem{return this.orderItem;}
   
   setViewRecord(orderItem:OrderItem){this.orderItemView = orderItem;}
  
  createInstance():OrderItem { return <OrderItem>{}; }
  getSuccessUrl():string { return 'OrderItems'}
  
  ngOnInit() {
    super.ngOnInit();
  
    this._customerOrderService.getRecords().subscribe(records =>this.customerOrders = records);
  
    this._productService.getRecords().subscribe(records =>this.products = records);
    
  }
  
    
   onCustomerOrderChanged(newValue, index) {
    this.getRecord().customerOrder = newValue;
  }
    
   onProductChanged(newValue, index) {
    this.getRecord().product = newValue;
  }
  
  
  


}
