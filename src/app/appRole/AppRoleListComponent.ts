

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { AppRoleDetailComponent } from './AppRoleDetailComponent';


import { AppRoleService } from './AppRoleService';
import {AppRole} from '../common/AppEntities.ts';

let template = require('./AppRoleListComponent.html');

@Component({
  selector: 'appRole-list',
  template: template,
  providers:[AppRoleService],
  directives: [AppRoleDetailComponent, ROUTER_DIRECTIVES]
})
export class AppRoleListComponent extends BaseListComponent<AppRole> implements OnInit {

  @Input()
  appRoles:AppRole[];
  
  selectedAppRole:AppRole;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _appRoleService:AppRoleService) { super(_appRoleService); }
  
  setRecords( appRole:AppRole[]){this.appRoles = appRole;} 
  getRecords():AppRole[]{return this.appRoles;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['AppRoleDetail', { id: this.selectedAppRole.id }]);}
}
