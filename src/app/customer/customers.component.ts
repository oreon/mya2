import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { Customer } from './customer';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { CustomerDetailComponent } from './customer-detail.component';

import { CustomerService } from './customer-service';

let template = require('./customers.component.html');

@Component({
  selector: 'customers',
  template: template,
  providers:[CustomerService],
  directives: [CustomerDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomersComponent implements OnInit {
  customers:Customer[];
  selectedCustomer:Customer;

  constructor(
  //  private _router: Router,
  private _customerService:CustomerService) { }


  getCustomers() {
    this._customerService.getCustomers().subscribe(records =>{
       this.customers = records;
     }
     );
  }

  ngOnInit() {
    this.getCustomers();
    console.log(this.customers);
  }


//  gotoDetail() {this._router.navigate(['CustomerDetail', { id: this.selectedCustomer.id }]);}
}
