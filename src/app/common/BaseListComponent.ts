import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


import { BaseEntity } from './BaseEntity';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';


import { BaseHttpService } from './BaseHttpService';



export abstract class BaseListComponent<T extends BaseEntity>{
  records:T[];
  selectedBaseEntity:T;
  errorMessage:string;

  // @Input()
  protected editMode:boolean = false

  constructor(
  //  private _router: Router,
  protected _recordService:BaseHttpService<T>) { }


  getBaseEntitys() {
    if(this.getRecords()) return;    
    this._recordService.getRecords().subscribe(records =>{
       this.records = records;
       this.setRecords(records)
     }
     );
  }
  
  
  abstract setRecords(t:T[]);
  abstract getRecords():T[];

  delete(record:T){
    this._recordService.delete(record).subscribe(
      response => {
        this.records.forEach( (t, index) => {if (t.id === record.id)  this.records.splice(index, 1); })
      },
      error=>{
        this.errorMessage = error;
      }
    );
  }


//  gotoDetail() {this._router.navigate(['BaseEntityDetail', { id: this.selectedBaseEntity.id }]);}
}
