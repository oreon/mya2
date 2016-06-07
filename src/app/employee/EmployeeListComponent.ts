

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { EmployeeDetailComponent } from './EmployeeDetailComponent';


import { EmployeeService } from './EmployeeService';



import {Employee} from '../common/AppEntities';
  





let template = require('./EmployeeListComponent.html');

@Component({
  selector: 'employee-list',
  template: template,
  providers:[EmployeeService],
  directives: [EmployeeDetailComponent, ROUTER_DIRECTIVES]
})
export class EmployeeListComponent extends BaseListComponent<Employee> implements OnInit {

  @Input()
  employees:Employee[];
  
  @Input()
  protected embedded:boolean = false
  
  selectedEmployee:Employee;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _employeeService:EmployeeService) { super(_employeeService); }
  
  setRecords( employee:Employee[]){this.employees = employee;} 
  getRecords():Employee[]{return this.employees;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['EmployeeDetail', { id: this.selectedEmployee.id }]);}
}
