



import {Employee} from '../common/AppEntities';
  





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { EmployeeService } from './EmployeeService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'employee-detail',
  templateUrl: './app/employee/employeeDetailComponent.html',
  //providers:[EmployeeService]
  directives: [  ]
})
export class EmployeeDetailComponent  extends BaseDetailComponent<Employee> implements OnInit {
  
  @Input()
  employee: Employee;
  
  @Input()
  protected embedded:boolean = false
  
  
  
  
  
  constructor(
  	
    protected _employeeService: EmployeeService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _employeeService,  _routeParams, _router);
  }
  
   setRecord( employee:Employee){this.employee = employee;} 
   getRecord():Employee{return this.employee;}
  
  createInstance():Employee { return <Employee>{}; }
  getSuccessUrl():string { return 'Employees'}
  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
