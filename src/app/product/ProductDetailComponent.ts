



import {Product} from '../common/AppEntities.ts';
  





import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

//import { Product } from './Product';
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
  
  
  
  
  
  constructor(
  	
    protected _productService: ProductService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _productService,  _routeParams, _router);
  }
  
  
  createInstance():Product { return new Product()}
  getSuccessUrl():string { return 'Products'}
 
  
  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
