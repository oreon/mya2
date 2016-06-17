import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { BaseEntity } from './BaseEntity';
import { BaseHttpService } from './BaseHttpService';
import { EventService} from '../common/EventService'


//import { DBService } from '../common/db-service';

import { BaseComponent } from './BaseComponent';


export abstract class BaseDetailComponent<T extends BaseEntity> extends  BaseComponent<T> implements OnInit {
  
  

  
 
  
  protected errorMessage:String

  abstract createInstance():T;
  abstract   getSuccessUrl()

  
  @Input()
  protected editMode:boolean = false

  constructor(
    protected _eventService:EventService<T>,
    protected _recordService: BaseHttpService<T>,
    protected _routeParams: RouteParams,
    protected _router: Router
  ) {
      super();
     _eventService.itemAdded$
     //.filter(item => item.constructor ==  Array)
     .subscribe(item => {  this.fetchViewRecord(item.id) ; this.editMode = false;})
  }

  getOrCreateEntity(){
    let id = +this._routeParams.get('id');
    
    if(this.getRecord()) return;

    if(  !id || id == 0 ){
      this.setRecord(this.createInstance());
      this.editMode = true;
      return;
    }

    this.parent = parseInt(this._routeParams.get('parent'))

    if( !isNaN(this.parent ) ){
      this.editMode = true
    }
    this.fetchEditRecord(id);
    this.fetchViewRecord(id);  
    
  }

  fetchEditRecord(id:number){  
    
    this._recordService.getById(id).subscribe(record => this.setRecord(record)); } 
    
  fetchViewRecord(id:number){ 
    
    this._recordService.getById(id, true).subscribe(record => this.setViewRecord(record)); 
  } 


  ngOnInit() {
    this.getOrCreateEntity()
  }

  goBack() {
    window.history.back();
  }

  

}
