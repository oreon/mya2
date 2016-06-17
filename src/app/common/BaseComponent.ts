import {  Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { BaseEntity } from './BaseEntity';
import { BaseHttpService } from './BaseHttpService';
import { EventService} from '../common/EventService'


//import { DBService } from '../common/db-service';


export abstract class BaseComponent<T extends BaseEntity>  {
  //@Input()
  //protected record: T;
  
 
  //@Input()
  protected embedded:boolean = false

  //@Input()
  protected editMode:boolean = false

  //@Input()
  protected parent:number 


    
  protected errorMessage:String

  abstract createInstance():T;
  abstract   getSuccessUrl();
 // protected  getEmbedded():boolean{ return false; };


  abstract setViewRecord(t:T)
  abstract setRecord(t:T)
  abstract getRecord():T

  enableEdit(){ this.editMode = true }
  disableEdit(){ this.editMode = false}

}