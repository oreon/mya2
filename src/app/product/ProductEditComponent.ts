



	import {Product} from '../common/AppEntities';
	import { EventService} from '../common/EventService'
	  
	
	
	



import { Component, Input, OnInit } from '@angular/core';
import { RouteParams, Router } from '@angular/router-deprecated';

import { ProductService } from './ProductService';
import { BaseEditComponent } from '../common/BaseEditComponent';

@Component({
  selector: 'product-edit',
  templateUrl: './app/product/productEditComponent.html',
  //providers:[ProductService]
  directives: [  ]
})
export class ProductEditComponent  extends BaseEditComponent<Product> implements OnInit {
  
  @Input()
  product: Product;
  
  @Input()
  productView: Product;
    
  @Input()
  protected embedded:boolean = false
  
  
  
  
  
  constructor(
  	
    protected _eventService:EventService<Product>,
    protected _productService: ProductService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super(_eventService, _productService,  _routeParams, _router);
  }
  
   setRecord( product:Product){this.product = product;} 
   getRecord():Product{return this.product;}
   setViewRecord(product:Product){this.productView = product;}
   
   
 createInstance():Product { 
 	
    return <Product>{}; 
  }

  getSuccessUrl():string { 
  	
    return 'Products'
  }

  
  ngOnInit() {
    super.ngOnInit();
    
  }
  
  
  
  


}
