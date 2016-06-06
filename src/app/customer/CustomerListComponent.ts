

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CustomerDetailComponent } from './CustomerDetailComponent';


import { CustomerService } from './CustomerService';
import {Customer} from '../common/AppEntities.ts';

let template = require('./CustomerListComponent.html');

@Component({
  selector: 'customer-list',
  template: template,
  providers:[CustomerService],
  directives: [CustomerDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomerListComponent extends BaseListComponent<Customer> implements OnInit {

  @Input()
  customers:Customer[];
  
  selectedCustomer:Customer;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _customerService:CustomerService) { super(_customerService); }
  
  setRecords( customer:Customer[]){this.customers = customer;} 
  getRecords():Customer[]{return this.customers;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['CustomerDetail', { id: this.selectedCustomer.id }]);}
}
