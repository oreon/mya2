



import {Category} from '../common/AppEntities.ts';
  





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

//import { Category } from './Category';
import { CategoryService } from './CategoryService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'category-detail',
  templateUrl: './app/category/categoryDetailComponent.html',
  //providers:[CategoryService]
  directives: [  ]
})
export class CategoryDetailComponent  extends BaseDetailComponent<Category> implements OnInit {
  
  @Input()
  category: Category;
  
  
  
  
  
  constructor(
  	
    protected _categoryService: CategoryService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _categoryService,  _routeParams, _router);
  }
  
  
  createInstance():Category { return new Category()}
  getSuccessUrl():string { return 'Categorys'}
 
  
  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
