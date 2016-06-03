// App
export * from './app.component';
export * from './app.service';

import {AppState} from './app.service';

import {CustomerService} from './customer/CustomerService'
import {CustomerOrderService} from './customerOrder/CustomerOrderService'
import {CustomerReviewService} from './customerReview/CustomerReviewService'

//import { CustomerReviewService } from './customerReview/CustomerReviewService';
import {ProductService} from './product/ProductService'
import {OrderItemService} from './orderItem/OrderItemService'

import {CategoryService} from './category/CategoryService'


// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  CustomerService,
  ProductService,
  CustomerOrderService,
  CustomerReviewService,
  OrderItemService,
  CategoryService,
];
