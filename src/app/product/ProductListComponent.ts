

import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { BaseListComponent} from '../common/BaseListComponent'

import { ProductDetailComponent } from './ProductDetailComponent';


import { ProductService } from './ProductService';



	import {Product} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	
	



let template = require('./ProductListComponent.html');

@Component({
  selector: 'product-list',
  template: template,
  providers:[ProductService],
  directives: [ProductDetailComponent, ROUTER_DIRECTIVES]
})
export class ProductListComponent extends BaseListComponent<Product> implements OnInit {

  @Input()
  productList:Product[];
  
  @Input()
  protected embedded:boolean = false
   
  product:Product;
  errorMessage:string;

  constructor(
  //  private _router: Router,
  protected _productService:ProductService) { super(_productService); }
  
  setRecords( product:Product[]){this.productList = product;} 
  getRecords():Product[]{return this.productList;}
  
  ngOnInit() { 
  	super.getBaseEntitys()
  }
  
  getEmbedded():boolean{ return this.embedded}
  
  setRecord( product:Product){this.product = product;} 
  getRecord():Product{return this.product;}
   
  setViewRecord(product:Product){  }
  
  createInstance():Product { return <Product>{}; }
  getSuccessUrl():string { return 'Products'}


//  gotoDetail() {this._router.navigate(['ProductDetail', { id: this.selectedProduct.id }]);}
}
