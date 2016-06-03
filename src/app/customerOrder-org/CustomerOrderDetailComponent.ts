

import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

//import { SkillService} from '../skill/skill-service';
//import { SkillType } from '../skillcustomerOrder';

import { CustomerOrder } from './customerOrder';
import { CustomerOrderService } from './CustomerOrderService';
import { OrderItem } from '../orderItem/OrderItem';

import { CustomerService } from '../customer/customer-service';
import { Customer } from '../customer/customer';


import { DBService } from '../common/db-service';
import { BaseDetailComponent } from '../common/BaseDetailComponent';

//let template = require('./customerOrder/customerOrder-detail.component.html');

@Component({
  selector: 'customerOrderDetail',
  templateUrl: './app/customerOrder/editCustomerOrder.html',
  providers:[CustomerOrderService, DBService]
  //directives: [CustomerOrderOrderDetailComponent]
})
export class CustomerOrderDetailComponent  extends BaseDetailComponent<CustomerOrder> implements OnInit {
  @Input()
  customerOrder: CustomerOrder;
  customers:Customer[];

  createInstance():CustomerOrder {
    console.log("called createInstance");
    return new CustomerOrder();
  }
  getSuccessUrl():string { return 'CustomerOrders'}



  constructor(
    protected _customerOrderService: CustomerOrderService,
    protected _customerService:CustomerService,
    protected _dbService:DBService,
    protected _routeParams: RouteParams,
    protected _router: Router
//    protected _fb:FormBuilder
  ) {
    super(_customerOrderService, _dbService, _routeParams, _router);
  }


  onCustomerChanged(newValue, index) {
    console.log(newValue);
  //  var current:Skill =  this.skills.filter(skill=> {return newValue == skill.id})[0];
    this.record.customer = newValue;
  }



  ngOnInit() {
    super.ngOnInit();
    this._customerService.getRecords().subscribe(records =>this.customers = records);
  }



  addOrderItems(){
  this.customerOrder.orderItems.push(new OrderItem());
  }

  removeOrderItems(index:number){
    this.customerOrder.orderItems.splice(index, 1);
  }

  onOrderItemsChanged(newValue, index) {
    console.log(newValue);
  }

}
