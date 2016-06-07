

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { ProductDetailComponent } from './ProductDetailComponent';


import { ProductService } from './ProductService';



import {Product} from '../common/AppEntities';
  





let template = require('./ProductListComponent.html');

@Component({
  selector: 'product-list',
  template: template,
  providers:[ProductService],
  directives: [ProductDetailComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent extends BaseListComponent<Product> implements OnInit {

  @Input()
  products:Product[];
  
  @Input()
  protected embedded:boolean = false
  
  selectedProduct:Product;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _productService:ProductService) { super(_productService); }
  
  setRecords( product:Product[]){this.products = product;} 
  getRecords():Product[]{return this.products;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }


//  gotoDetail() {this._router.navigate(['ProductDetail', { id: this.selectedProduct.id }]);}
}
