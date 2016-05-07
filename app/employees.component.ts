import { Component, OnInit } from 'angular2/core';
import { Router } from 'angular2/router';

import { Hero } from './hero';
import { Employee } from './employee';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';


import { EmployeeDetailComponent } from './employee-detail.component';

import { EmployeeService } from './employee-service';



@Component({
  selector: 'my-heroes',
  templateUrl: 'app/employees.component.html',
  directives: [EmployeeDetailComponent, ROUTER_DIRECTIVES]
})
export class EmployeesComponent implements OnInit {
  employees:Employee[];
  selectedHero: Hero;

  constructor(
    private _router: Router,
  private _employeeService:EmployeeService) { }


  getEmployees() {
  //  body["results"]
    this._employeeService.getEmployees().subscribe(records =>{
      console.log(records);
       this.employees = records["results"];
     }
     );
  }

  ngOnInit() {
    this.getEmployees();
  }


  gotoDetail() {
    this._router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}

/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
