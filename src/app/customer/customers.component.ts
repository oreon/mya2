import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Customer } from './customer';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { CustomerDetailComponent } from './customer-detail.component';

import { BaseListComponent} from '../common/BaseListComponent'

import { CustomerService } from './customer-service';

let template = require('./customers.component.html');

@Component({
  selector: 'customers',
  template: template,
  providers:[CustomerService],
  directives: [CustomerDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomersComponent extends BaseListComponent<Customer> implements OnInit {
  customers:Customer[];
  selectedCustomer:Customer;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _customerService:CustomerService) { super(_customerService); }


//  gotoDetail() {this._router.navigate(['CustomerDetail', { id: this.selectedCustomer.id }]);}
}
