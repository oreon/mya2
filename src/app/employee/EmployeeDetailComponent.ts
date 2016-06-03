



import {Employee} from '../common/AppEntities.ts';
  





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

//import { Employee } from './Employee';
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
  
  
  
  
  
  constructor(
  	
    protected _employeeService: EmployeeService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _employeeService,  _routeParams, _router);
  }
  
  
  createInstance():Employee { return new Employee()}
  getSuccessUrl():string { return 'Employees'}
 
  
  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
