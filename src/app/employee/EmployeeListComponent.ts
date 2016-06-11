

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { EmployeeDetailComponent } from './EmployeeDetailComponent';


import { EmployeeService } from './EmployeeService';



	import {Employee} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	
	



let template = require('./EmployeeListComponent.html');

@Component({
  selector: 'employee-list',
  template: template,
  providers:[EmployeeService],
  directives: [EmployeeDetailComponent, ROUTER_DIRECTIVES]
})
export class EmployeeListComponent extends BaseListComponent<Employee> implements OnInit {

  @Input()
  employeeList:Employee[];
  
  @Input()
  protected embedded:boolean = false
   
  employee:Employee;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _employeeService:EmployeeService) { super(_employeeService); }
  
  setRecords( employee:Employee[]){this.employeeList = employee;} 
  getRecords():Employee[]{return this.employeeList;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }
  
  getEmbedded():boolean{ return this.embedded}
  
  setRecord( employee:Employee){this.employee = employee;} 
  getRecord():Employee{return this.employee;}
   
  setViewRecord(employee:Employee){  }
  
  createInstance():Employee { return <Employee>{}; }
  getSuccessUrl():string { return 'Employees'}


//  gotoDetail() {this._router.navigate(['EmployeeDetail', { id: this.selectedEmployee.id }]);}
}
