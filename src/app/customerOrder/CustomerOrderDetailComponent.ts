



import {CustomerOrder} from '../common/AppEntities.ts';
  

import {CustomerService} from '../customer/CustomerService'
import {Customer} from '../common/AppEntities.ts';
import {OrderItem} from '../common/AppEntities.ts';


import {OrderItemDetailComponent} from '../orderItem/OrderItemDetailComponent'



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

//import { CustomerOrder } from './CustomerOrder';
import { CustomerOrderService } from './CustomerOrderService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'customerOrder-detail',
  templateUrl: './app/customerOrder/customerOrderDetailComponent.html',
  //providers:[CustomerOrderService]
  directives: [  OrderItemDetailComponent ]
})
export class CustomerOrderDetailComponent  extends BaseDetailComponent<CustomerOrder> implements OnInit {
  
  @Input()
  customerOrder: CustomerOrder;
  
  
   //orderItems : OrderItem[]
   setRecord( customerOrder:CustomerOrder){this.customerOrder = customerOrder;} 
   getRecord():CustomerOrder{return this.customerOrder;}
   
  
    
  customers : Customer[]
  
  
  constructor(
  	 protected _customerService: CustomerService,
    protected _customerOrderService: CustomerOrderService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _customerOrderService,  _routeParams, _router);
  }
  
  
  createInstance():CustomerOrder { return  <CustomerOrder>{}}
  getSuccessUrl():string { return 'CustomerOrders'}
 
  
  
  ngOnInit() {
    super.ngOnInit();
    this._customerService.getRecords().subscribe(records =>this.customers = records);
    
  }
  
    
   onCustomerChanged(newValue, index) {
    this.record.customer = newValue;
  }
  
  
  
  addOrderItems(){
    console.log('adding')
    if(!this.customerOrder.orderItems) { this.customerOrder.orderItems = [] }
    this.customerOrder.orderItems.push( <OrderItem>{"qty":1});
  }

  removeOrderItems(index:number){
    this.customerOrder.orderItems.splice(index, 1);
  }

  onOrderItemsChanged(newValue, index) {
    console.log(newValue);
  }
  


}
