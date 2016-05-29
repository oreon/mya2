import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { BaseEntity } from './BaseEntity';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { BaseHttpService } from './BaseHttpService';



export abstract class BaseListComponent<T extends BaseEntity> implements OnInit {
  customers:BaseEntity[];
  selectedBaseEntity:BaseEntity;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _customerService:BaseHttpService<T>) { }


  getBaseEntitys() {
    this._customerService.getRecords().subscribe(records =>{
       this.customers = records;
     }
     );
  }

  ngOnInit() {
    this.getBaseEntitys();
    console.log(this.customers);
  }

  delete(customer:T){
    this._customerService.delete(customer).subscribe(
      response => {
        this.customers.forEach( (t, index) => {if (t.id === customer.id)  this.customers.splice(index, 1); })
      },
      error=>{
        this.errorMessage = error;
      }
    );
  }


//  gotoDetail() {this._router.navigate(['BaseEntityDetail', { id: this.selectedBaseEntity.id }]);}
}
