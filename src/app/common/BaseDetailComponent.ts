import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { SkillService} from '../skill/skill-service';
//import { SkillType } from './record';

import { BaseEntity } from './BaseEntity';

import { BaseHttpService } from './BaseHttpService';

import { EventService} from '../common/EventService'


//import { DBService } from '../common/db-service';


export abstract class BaseDetailComponent<T extends BaseEntity> implements OnInit {
  //@Input()
  //protected record: T;
  
 
  @Input()
  protected embedded:boolean = false
  
  protected errorMessage:String

  abstract createInstance():T;
  abstract   getSuccessUrl()

  
  @Input()
  protected editMode:boolean = false

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
      this.editMode = true;
      return;
    }

    this.fetchEditRecord(id);
    this.fetchViewRecord(id);  
  }

  fetchEditRecord(id:number){  this._recordService.getById(id).subscribe(record => this.setRecord(record)); } 
  fetchViewRecord(id:number){ this._recordService.getById(id, true).subscribe(record => this.setViewRecord(record)); } 

  
  abstract setViewRecord(t:T)
  abstract setRecord(t:T)
  abstract getRecord():T

  getEventService():EventService<T> { return null; }

  ngOnInit() {
    this.getOrCreateEntity()
  }

  goBack() {
    window.history.back();
  }

  enableEdit(){ this.editMode = true }

}
