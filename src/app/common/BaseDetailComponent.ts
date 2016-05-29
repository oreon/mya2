import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { SkillService} from '../skill/skill-service';
//import { SkillType } from './customer';

import { BaseEntity } from './BaseEntity';

import { BaseHttpService } from './BaseHttpService';

import { DBService } from '../common/db-service';


export abstract class BaseDetailComponent<T extends BaseEntity> implements OnInit {
  @Input()
  customer: T;
  errorMessage:String

  abstract createInstance():T;
  abstract   getSuccessUrl()

  constructor(
    protected _customerService: BaseHttpService<T>,
    protected _dbService:DBService,
    protected _routeParams: RouteParams,
    protected _router: Router
  ) {}

  getOrCreateCustomer(){
    let id = +this._routeParams.get('id');

    if(!id || id == 0 ){
      this.customer = this.createInstance();
      return;
    }

    this._customerService.getById(id).subscribe(
      customer => {
        this.customer = customer;
      }
    );
  }

  ngOnInit() {
    this.getOrCreateCustomer()
  }

  goBack() {
    window.history.back();
  }

  save() {
    this._customerService.save(this.customer)
                  .subscribe(
                    customer =>{
                      this.customer = customer; //console.log('saving ' + customer.firstName)
                      this._router.navigate([this.getSuccessUrl()/*, { id: this.selectedEmployee.id }*/]);
                    },
                    error =>  this.errorMessage = <any>error);
  }


}
