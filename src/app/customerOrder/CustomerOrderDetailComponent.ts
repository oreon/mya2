



	import {CustomerOrder} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	import {CustomerService} from '../customer/CustomerService'
	import {Customer} from '../common/AppEntities';
	
	
	
	import {OrderItemEditComponent} from '../orderItem/OrderItemEditComponent';
	import {OrderItemListComponent} from '../orderItem/OrderItemListComponent';
	import {OrderItem} from '../common/AppEntities';
	



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { CustomerOrderService } from './CustomerOrderService';
import { CustomerOrderEditComponent} from './CustomerOrderEditComponent';
import { BaseDetailComponent } from '../common/BaseDetailComponent';

@Component({
  selector: 'customerOrder-detail',
  templateUrl: './app/customerOrder/customerOrderDetailComponent.html',
  //providers:[CustomerOrderService]
  directives: [ CustomerOrderEditComponent, OrderItemListComponent]
})
export class CustomerOrderDetailComponent  extends BaseDetailComponent<CustomerOrder> implements OnInit {
  
  @Input()
  customerOrder: CustomerOrder;
  
  @Input()
  customerOrderView: CustomerOrder;

  @Input()
  protected embedded:boolean = false
  
  constructor(
  	protected _eventService:EventService<CustomerOrder>,
    protected _customerOrderService: CustomerOrderService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _eventService, _customerOrderService,  _routeParams, _router);
  }
  
   setRecord( customerOrder:CustomerOrder){this.customerOrder = customerOrder;} 
   getRecord():CustomerOrder{return this.customerOrder;}
   
   setViewRecord(customerOrder:CustomerOrder){  this.customerOrderView = customerOrder;}
   
   
 createInstance():CustomerOrder { 
 	
    if (this.parent){
       return <CustomerOrder>{customer:<any>this.parent}
    }
    
    return <CustomerOrder>{}; 
  }

  getSuccessUrl():string { 
  	
    if (this.parent){
      return '/CustomerDetail'  
    }
    
    return 'CustomerOrders'
  }

  
  ngOnInit() {
    super.ngOnInit();
  }

}
