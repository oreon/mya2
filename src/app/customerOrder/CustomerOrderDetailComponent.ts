



import {CustomerOrder} from '../common/AppEntities';
  

import {CustomerService} from '../customer/CustomerService'
import {Customer} from '../common/AppEntities';



import {OrderItemDetailComponent} from '../orderItem/OrderItemDetailComponent';
import {OrderItemListComponent} from '../orderItem/OrderItemListComponent';
import {OrderItem} from '../common/AppEntities';



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { CustomerOrderService } from './CustomerOrderService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'customerOrder-detail',
  templateUrl: './app/customerOrder/customerOrderDetailComponent.html',
  //providers:[CustomerOrderService]
  directives: [  OrderItemDetailComponent, OrderItemListComponent  ]
})
export class CustomerOrderDetailComponent  extends BaseDetailComponent<CustomerOrder> implements OnInit {
  
  @Input()
  customerOrder: CustomerOrder;
  
  @Input()
  customerOrderView: CustomerOrder;
  
  
  @Input()
  protected embedded:boolean = false
  
  
   //orderItems : OrderItem[]
  
  
    
  customers : Customer[]
  
  
  constructor(
  
    protected _customerService: CustomerService ,
    
    protected _customerOrderService: CustomerOrderService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _customerOrderService,  _routeParams, _router);
  }
  
   setRecord( customerOrder:CustomerOrder){this.customerOrder = customerOrder;} 
   getRecord():CustomerOrder{return this.customerOrder;}
   
   setViewRecord(customerOrder:CustomerOrder){this.customerOrderView = customerOrder;}
  
  createInstance():CustomerOrder { return <CustomerOrder>{}; }
  getSuccessUrl():string { return 'CustomerOrders'}
  
  ngOnInit() {
    super.ngOnInit();
  
    this._customerService.getRecords().subscribe(records =>this.customers = records);
    
  }
  
    
   onCustomerChanged(newValue, index) {
    this.getRecord().customer = newValue;
  }
  
  
  
  addOrderItems(){
   if(!this.customerOrder.orderItems) this.customerOrder.orderItems = [];
   this.customerOrder.orderItems.push(<OrderItem>{});
  }

  removeOrderItems(index:number){
    this.customerOrder.orderItems.splice(index, 1);
  }

  onOrderItemsChanged(newValue, index) {console.log(newValue);}
  


}
