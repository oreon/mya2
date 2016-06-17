

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CategoryDetailComponent } from './CategoryDetailComponent';


import { CategoryService } from './CategoryService';



	import {Category} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	
	



let template = require('./CategoryListComponent.html');

@Component({
  selector: 'category-list',
  template: template,
  inputs:['parent', 'embedded'],
  providers:[CategoryService],
  directives: [CategoryDetailComponent, ROUTER_DIRECTIVES]
})
export class CategoryListComponent extends BaseListComponent<Category> implements OnInit {

  @Input()
  categoryList:Category[];
   
  category:Category;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _categoryService:CategoryService) { super(_categoryService); }
  
  setRecords( category:Category[]){this.categoryList = category;} 
  getRecords():Category[]{return this.categoryList;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }
  
  getEmbedded():boolean{ return this.embedded}
  
  setRecord( category:Category){this.category = category;} 
  getRecord():Category{return this.category;}
   
  setViewRecord(category:Category){  }
  
  createInstance():Category { return <Category>{}; }
  getSuccessUrl():string { return 'Categorys'}


//  gotoDetail() {this._router.navigate(['CategoryDetail', { id: this.selectedCategory.id }]);}
}
