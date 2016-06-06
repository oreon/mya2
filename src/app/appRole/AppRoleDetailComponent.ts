



import {AppRole} from '../common/AppEntities';
  





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { AppRoleService } from './AppRoleService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'appRole-detail',
  templateUrl: './app/appRole/appRoleDetailComponent.html',
  //providers:[AppRoleService]
  directives: [  ]
})
export class AppRoleDetailComponent  extends BaseDetailComponent<AppRole> implements OnInit {
  
  @Input()
  appRole: AppRole;
  
  @Input()
  protected embedded:boolean = false
  
  
  
  
  
  constructor(
  	
    protected _appRoleService: AppRoleService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _appRoleService,  _routeParams, _router);
  }
  
   setRecord( appRole:AppRole){this.appRole = appRole;} 
   getRecord():AppRole{return this.appRole;}
  
  createInstance():AppRole { return <AppRole>{}; }
  getSuccessUrl():string { return 'AppRoles'}
  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
