import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { SkillService} from '../skill/skill-service';
//import { SkillType } from './record';

import { BaseEntity } from './BaseEntity';

import { BaseHttpService } from './BaseHttpService';

//import { DBService } from '../common/db-service';


export abstract class BaseDetailComponent<T extends BaseEntity> implements OnInit {
  //@Input()
  //protected record: T;
  
    
  @Input()
  protected embedded:boolean = false
  
  protected errorMessage:String

  abstract createInstance():T;
  abstract   getSuccessUrl()



  constructor(
    protected _recordService: BaseHttpService<T>,
    //protected _dbService:DBService,
    protected _routeParams: RouteParams,
    protected _router: Router
  ) {}

  getOrCreateEntity(){
    let id = +this._routeParams.get('id');
    
    if(this.getRecord()) return;

    if(  !id || id == 0 ){
      this.setRecord(this.createInstance());
      return;
    }

    this._recordService.getById(id).subscribe(
      record => this.setRecord(record)
    );
    
    this._recordService.getById(id, true).subscribe(
      record => this.setViewRecord(record)
    );
    
  }
  
  setViewRecord(t:T){}
  setRecord(t:T){}
  getRecord():T{ return null;}

  ngOnInit() {
    this.getOrCreateEntity()
  }

  goBack() {
    window.history.back();
  }

  save() {
    console.log('called ' + this.getRecord());
    this._recordService.save(this.getRecord())
                  .subscribe(
                    record =>{
                      this.setRecord( record); //console.log('saving ' + record.firstName)
                      this._router.navigate([this.getSuccessUrl()/*, { id: this.selectedEmployee.id }*/]);
                    },
                    error =>  this.errorMessage = <any>error);
  }


}
