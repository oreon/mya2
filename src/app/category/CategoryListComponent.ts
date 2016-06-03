

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { CategoryDetailComponent } from './CategoryDetailComponent';


import { CategoryService } from './CategoryService';
import {Category} from '../common/AppEntities.ts';

let template = require('./CategoryListComponent.html');

@Component({
  selector: 'category-list',
  template: template,
  providers:[CategoryService],
  directives: [CategoryDetailComponent, ROUTER_DIRECTIVES]
})
export class CategoryListComponent extends BaseListComponent<Category> implements OnInit {
  categorys:Category[];
  selectedCategory:Category;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _categoryService:CategoryService) { super(_categoryService); }
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['CategoryDetail', { id: this.selectedCategory.id }]);}
}
