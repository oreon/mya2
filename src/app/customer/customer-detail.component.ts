import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { SkillService} from '../skill/skill-service';
//import { SkillType } from './customer';

import { Customer } from './customer';
import { CustomerService } from './customer-service';

import { DBService } from '../common/db-service';
import { BaseDetailComponent } from '../common/BaseDetailComponent';


//import { CustomerOrderDetailComponent} from  './customer-order.component';
//let template = require('./customer/customer-detail.component.html');

@Component({
  selector: 'customer-detail',
  templateUrl: './app/customer/customer-detail.component.html',
  providers:[CustomerService, DBService, SkillService]
  //directives: [CustomerOrderDetailComponent]
})
export class CustomerDetailComponent  extends BaseDetailComponent<Customer> implements OnInit {
  @Input()
  customer: Customer;
  createInstance():Customer { return new Customer()}
  getSuccessUrl():string { return 'Customers'}

  constructor(
    protected _customerService: CustomerService,
    protected _dbService:DBService,
    protected _routeParams: RouteParams,
    protected _router: Router
  ) {
    super(_customerService, _dbService, _routeParams, _router);
  }


  ngOnInit() {
    super.getOrCreateCustomer();
  }

}
