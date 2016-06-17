



	import {Employee} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	
	



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { EmployeeService } from './EmployeeService';
import { BaseEditComponent } from '../common/BaseEditComponent';

@Component({
  selector: 'employee-edit',
  templateUrl: './app/employee/employeeEditComponent.html',
  //providers:[EmployeeService]
  directives: [  ]
})
export class EmployeeEditComponent  extends BaseEditComponent<Employee> implements OnInit {
  
  @Input()
  employee: Employee;
  
  @Input()
  employeeView: Employee;
    
  @Input()
  protected embedded:boolean = false
  
  
  
  
  
  constructor(
  	
    protected _eventService:EventService<Employee>,
    protected _employeeService: EmployeeService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super(_eventService, _employeeService,  _routeParams, _router);
  }
  
   setRecord( employee:Employee){this.employee = employee;} 
   getRecord():Employee{return this.employee;}
   setViewRecord(employee:Employee){this.employeeView = employee;}
   
   
 createInstance():Employee { 
 	
    return <Employee>{}; 
  }

  getSuccessUrl():string { 
  	
    return 'Employees'
  }

  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
