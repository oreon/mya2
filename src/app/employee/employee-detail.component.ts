import { Component, Input, OnInit } from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';

//import { Skill} from './employee';
//import { SkillType } from './employee';

import { Employee } from './employee';
import { EmployeeSkill } from './employee';
import { Skill } from './employee';


import { EmployeeService } from './employee-service';
import { DBService } from '../common/db-service';


@Component({
  selector: 'my-employee-detail',
  template: './employee-detail.component.html',
})
export class EmployeeDetailComponent implements OnInit {
  @Input() employee: Employee;
  errorMessage:String

  skills:Skill[];

  constructor(
    private _employeeService: EmployeeService,
    private _dbService:DBService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._employeeService.getEmployee(id)
                  .subscribe(
                    employee =>{ this.employee = employee;},
                    error =>  this.errorMessage = <any>error);

     this._dbService.getCahcedSkills().subscribe(
         records =>{ this.skills = records["results"]; },
         error =>  this.errorMessage = <any>error);

  }

  goBack() {
    window.history.back();
  }

  save() {
    this._employeeService.saveEmployee(this.employee)
                  .subscribe(
                    employee =>{ this.employee = employee; console.log(employee.firstName)},
                    error =>  this.errorMessage = <any>error);
  }





  addEmployeeSkill(){
    var skl:EmployeeSkill= new EmployeeSkill() ;
  //  var skl.setSkillType();
  this.employee.employeeSkills.push(skl);

  }

  removeEmployeeSkill(index:number){
    this.employee.employeeSkills.splice(index, 1);
  }

  onEmployeeSkillChanged(newValue, index) {
    console.log(newValue);
  //  var current:Skill =  this.skills.filter(skill=> {return newValue == skill.id})[0];
  //  this.employee.employeeSkills[index].skill = current;
  }



}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
