

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { EmployeeDetailComponent } from './EmployeeDetailComponent';


import { EmployeeService } from './EmployeeService';
import {Employee} from '../common/AppEntities.ts';

let template = require('./EmployeeListComponent.html');

@Component({
  selector: 'employee-list',
  template: template,
  providers:[EmployeeService],
  directives: [EmployeeDetailComponent, ROUTER_DIRECTIVES]
})
export class EmployeeListComponent extends BaseListComponent<Employee> implements OnInit {
  employees:Employee[];
  selectedEmployee:Employee;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _employeeService:EmployeeService) { super(_employeeService); }
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['EmployeeDetail', { id: this.selectedEmployee.id }]);}
}
