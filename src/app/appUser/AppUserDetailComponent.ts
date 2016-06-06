



import {AppUser} from '../common/AppEntities';
  





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { AppUserService } from './AppUserService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'appUser-detail',
  templateUrl: './app/appUser/appUserDetailComponent.html',
  //providers:[AppUserService]
  directives: [  ]
})
export class AppUserDetailComponent  extends BaseDetailComponent<AppUser> implements OnInit {
  
  @Input()
  appUser: AppUser;
  
  @Input()
  protected embedded:boolean = false
  
  
  
  
  
  constructor(
  	
    protected _appUserService: AppUserService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _appUserService,  _routeParams, _router);
  }
  
   setRecord( appUser:AppUser){this.appUser = appUser;} 
   getRecord():AppUser{return this.appUser;}
  
  createInstance():AppUser { return <AppUser>{}; }
  getSuccessUrl():string { return 'AppUsers'}
  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
