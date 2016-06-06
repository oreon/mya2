



import {Group} from '../common/AppEntities';
  





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { GroupService } from './GroupService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'group-detail',
  templateUrl: './app/group/groupDetailComponent.html',
  //providers:[GroupService]
  directives: [  ]
})
export class GroupDetailComponent  extends BaseDetailComponent<Group> implements OnInit {
  
  @Input()
  group: Group;
  
  @Input()
  protected embedded:boolean = false
  
  
  
  
  
  constructor(
  	
    protected _groupService: GroupService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _groupService,  _routeParams, _router);
  }
  
   setRecord( group:Group){this.group = group;} 
   getRecord():Group{return this.group;}
  
  createInstance():Group { return <Group>{}; }
  getSuccessUrl():string { return 'Groups'}
  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
