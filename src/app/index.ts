

export * from './app.component';
export * from './app.service';

import {AppState} from './app.service';

import {AppUserService} from './appUser/AppUserService'
import {AppRoleService} from './appRole/AppRoleService'
import {GroupService} from './group/GroupService'
import {ProductService} from './product/ProductService'
import {CategoryService} from './category/CategoryService'
import {CustomerService} from './customer/CustomerService'
import {CustomerOrderService} from './customerOrder/CustomerOrderService'
import {OrderItemService} from './orderItem/OrderItemService'
import {EmployeeService} from './employee/EmployeeService'
import {CustomerReviewService} from './customerReview/CustomerReviewService'


// Application wide providers
export const APP_PROVIDERS = [
  AppState,
  	AppUserService,
  	AppRoleService,
  	GroupService,
  	ProductService,
  	CategoryService,
  	CustomerService,
  	CustomerOrderService,
  	OrderItemService,
  	EmployeeService,
  	CustomerReviewService,
  
];
