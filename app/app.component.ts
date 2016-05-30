import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HeroService } from './hero.service';
import { EmployeeService } from './employee-service';
import { DBService } from './db-service';
import { SkillService } from './skill-service';

import {LoggedInRouterOutlet} from './LoggedInOutlet';
import {Home} from './home/home';
import {Login} from './login/login';
import {Signup} from './signup/signup';

import { EmployeeDetailComponent} from './employee-detail.component';

import { DashboardComponent } from './dashboard.component';
import { HeroesComponent } from './heroes.component';
import { EmployeesComponent } from './employees.component';

import { HeroDetailComponent } from './hero-detail.component';

import { HTTP_PROVIDERS } from 'angular2/http';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <nav>
      <a [routerLink]="['Dashboard']">Dashboard</a>
      <a [routerLink]="['Heroes']">Heroes</a>
      <a [routerLink]="['Employees']">Employees</a>
      <a [routerLink]="['Employees']">Logout</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [
    ROUTER_PROVIDERS,
    HTTP_PROVIDERS,
    HeroService,
    EmployeeService,
    SkillService,
    DBService

  ]
})
@RouteConfig([
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
,
   {
     path: '/employees/:id',
     name: 'EmployeeDetail',
     component: EmployeeDetailComponent
   },
   {
     path: '/employees',
     name: 'Employees',
     component: EmployeesComponent
   },
   { path: '/home', component: Home, as: 'Home' },
   { path: '/login', component: Login, as: 'Login' },
   { path: '/signup', component: Signup, as: 'Signup' }
])
export class AppComponent {
  title = 'Tour of Heroes';
}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
