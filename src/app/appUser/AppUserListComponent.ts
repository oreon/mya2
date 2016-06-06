

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { AppUserDetailComponent } from './AppUserDetailComponent';


import { AppUserService } from './AppUserService';
import {AppUser} from '../common/AppEntities.ts';

let template = require('./AppUserListComponent.html');

@Component({
  selector: 'appUser-list',
  template: template,
  providers:[AppUserService],
  directives: [AppUserDetailComponent, ROUTER_DIRECTIVES]
})
export class AppUserListComponent extends BaseListComponent<AppUser> implements OnInit {

  @Input()
  appUsers:AppUser[];
  
  selectedAppUser:AppUser;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _appUserService:AppUserService) { super(_appUserService); }
  
  setRecords( appUser:AppUser[]){this.appUsers = appUser;} 
  getRecords():AppUser[]{return this.appUsers;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['AppUserDetail', { id: this.selectedAppUser.id }]);}
}
