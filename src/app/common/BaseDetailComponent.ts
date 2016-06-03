import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { SkillService} from '../skill/skill-service';
//import { SkillType } from './record';

import { BaseEntity } from './BaseEntity';

import { BaseHttpService } from './BaseHttpService';

//import { DBService } from '../common/db-service';


export abstract class BaseDetailComponent<T extends BaseEntity> implements OnInit {
  @Input()
  protected record: T;
  protected errorMessage:String

  abstract createInstance():T;
  abstract   getSuccessUrl()



  constructor(
    protected _recordService: BaseHttpService<T>,
    //protected _dbService:DBService,
    protected _routeParams: RouteParams,
    protected _router: Router
  ) {}

  getOrCreateCustomer(){
    let id = +this._routeParams.get('id');
    
    if(this.getRecord()) return;

    if(  !id || id == 0 ){
      console.log('creating record')
      this.record = this.createInstance();
      this.setRecord(this.record);
      return;
    }

    this._recordService.getById(id).subscribe(
      record => {
        this.record = record;
        this.setRecord(this.record);
      }
    );
  }
  
  setRecord(t:T){}
  getRecord():T{ return null;}

  ngOnInit() {
    this.getOrCreateCustomer()
  }

  goBack() {
    window.history.back();
  }

  save() {
    console.log('called ' + this.getRecord());
    this._recordService.save(this.getRecord())
                  .subscribe(
                    record =>{
                      this.record = record; //console.log('saving ' + record.firstName)
                      this._router.navigate([this.getSuccessUrl()/*, { id: this.selectedEmployee.id }*/]);
                    },
                    error =>  this.errorMessage = <any>error);
  }


}
