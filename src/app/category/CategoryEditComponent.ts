



	import {Category} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	
	



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { CategoryService } from './CategoryService';
import { BaseEditComponent } from '../common/BaseEditComponent';

@Component({
  selector: 'category-edit',
  templateUrl: './app/category/categoryEditComponent.html',
  //providers:[CategoryService]
  directives: [  ]
})
export class CategoryEditComponent  extends BaseEditComponent<Category> implements OnInit {
  
  @Input()
  category: Category;
  
  @Input()
  categoryView: Category;
    
  @Input()
  protected embedded:boolean = false
  
  
  
  
  
  constructor(
  	
    protected _eventService:EventService<Category>,
    protected _categoryService: CategoryService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super(_eventService, _categoryService,  _routeParams, _router);
  }
  
   setRecord( category:Category){this.category = category;} 
   getRecord():Category{return this.category;}
   setViewRecord(category:Category){this.categoryView = category;}
   
  
  createInstance():Category { return <Category>{}; }
  getSuccessUrl():string { return 'Categorys'}
  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
