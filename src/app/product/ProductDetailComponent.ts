



import {Product} from '../common/AppEntities';
  





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { ProductService } from './ProductService';

import { BaseDetailComponent } from '../common/BaseDetailComponent';


@Component({
  selector: 'product-detail',
  templateUrl: './app/product/productDetailComponent.html',
  //providers:[ProductService]
  directives: [  ]
})
export class ProductDetailComponent  extends BaseDetailComponent<Product> implements OnInit {
  
  @Input()
  product: Product;
  
  @Input()
  protected embedded:boolean = false
  
  
  
  
  
  constructor(
  	
    protected _productService: ProductService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _productService,  _routeParams, _router);
  }
  
   setRecord( product:Product){this.product = product;} 
   getRecord():Product{return this.product;}
  
  createInstance():Product { return <Product>{}; }
  getSuccessUrl():string { return 'Products'}
  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
