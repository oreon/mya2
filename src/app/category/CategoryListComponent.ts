

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CategoryDetailComponent } from './CategoryDetailComponent';


import { CategoryService } from './CategoryService';



import {Category} from '../common/AppEntities';
  





let template = require('./CategoryListComponent.html');

@Component({
  selector: 'category-list',
  template: template,
  providers:[CategoryService],
  directives: [CategoryDetailComponent, ROUTER_DIRECTIVES]
})
export class CategoryListComponent extends BaseListComponent<Category> implements OnInit {

  @Input()
  categorys:Category[];
  
  @Input()
  protected embedded:boolean = false
  
  selectedCategory:Category;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _categoryService:CategoryService) { super(_categoryService); }
  
  setRecords( category:Category[]){this.categorys = category;} 
  getRecords():Category[]{return this.categorys;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['CategoryDetail', { id: this.selectedCategory.id }]);}
}
