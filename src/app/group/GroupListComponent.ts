

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { GroupDetailComponent } from './GroupDetailComponent';


import { GroupService } from './GroupService';
import {Group} from '../common/AppEntities.ts';

let template = require('./GroupListComponent.html');

@Component({
  selector: 'group-list',
  template: template,
  providers:[GroupService],
  directives: [GroupDetailComponent, ROUTER_DIRECTIVES]
})
export class GroupListComponent extends BaseListComponent<Group> implements OnInit {

  @Input()
  groups:Group[];
  
  selectedGroup:Group;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _groupService:GroupService) { super(_groupService); }
  
  setRecords( group:Group[]){this.groups = group;} 
  getRecords():Group[]{return this.groups;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['GroupDetail', { id: this.selectedGroup.id }]);}
}
