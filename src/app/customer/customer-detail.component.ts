import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { SkillService} from '../skill/skill-service';
//import { SkillType } from './customer';

import { Customer } from './customer';

import { CustomerService } from './customer-service';

import { DBService } from '../common/db-service';


//let template = require('./customer/customer-detail.component.html');

@Component({
  selector: 'customer-detail',
  templateUrl: './app/customer/customer-detail.component.html',
  providers:[CustomerService, DBService, SkillService],
//  directives: [CustomerDetailComponent, ROUTER_DIRECTIVES]
})
export class CustomerDetailComponent implements OnInit {
  @Input()
  customer: Customer;
  errorMessage:String

  constructor(
    private _customerService: CustomerService,
    private _dbService:DBService,
    private _routeParams: RouteParams,
     private _router: Router
  ) {
  }

  getCustomer(){


  }

  ngOnInit() {
    this.getCustomer();
        let id = +this._routeParams.get('id');

        if(id == 0 ){
          this.customer = new Customer();
          return;
        }

        this._customerService.getCustomer(id).subscribe(
          customer => {
            console.log('got ' + customer.firstName);
            this.customer = customer;
          }

        );
  }

  goBack() {
    window.history.back();
  }

  save() {
    this._customerService.saveCustomer(this.customer)
                  .subscribe(
                    customer =>{
                      this.customer = customer; console.log(customer.firstName)
                      this._router.navigate(['Customers'/*, { id: this.selectedEmployee.id }*/]);
                    },
                    error =>  this.errorMessage = <any>error);
  }


}
