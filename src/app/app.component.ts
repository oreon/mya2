/*
 * Angular 2 decorators and services
 */
import {Component, ViewEncapsulation} from '@angular/core';
import {RouteConfig, Router} from '@angular/router-deprecated';
import {Home} from './home';
import {Login} from './login/login';
import {AppState} from './app.service';
import {RouterActive} from './router-active';

import {LoggedInRouterOutlet} from './LoggedInOutlet';

import {AppUserListComponent} from './appUser/AppUserListComponent'
import {AppUserDetailComponent} from './appUser/AppUserDetailComponent'
import {AppRoleListComponent} from './appRole/AppRoleListComponent'
import {AppRoleDetailComponent} from './appRole/AppRoleDetailComponent'
import {GroupListComponent} from './group/GroupListComponent'
import {GroupDetailComponent} from './group/GroupDetailComponent'
import {ProductListComponent} from './product/ProductListComponent'
import {ProductDetailComponent} from './product/ProductDetailComponent'
import {CategoryListComponent} from './category/CategoryListComponent'
import {CategoryDetailComponent} from './category/CategoryDetailComponent'
import {CustomerListComponent} from './customer/CustomerListComponent'
import {CustomerDetailComponent} from './customer/CustomerDetailComponent'
import {CustomerOrderListComponent} from './customerOrder/CustomerOrderListComponent'
import {CustomerOrderDetailComponent} from './customerOrder/CustomerOrderDetailComponent'
import {OrderItemListComponent} from './orderItem/OrderItemListComponent'
import {OrderItemDetailComponent} from './orderItem/OrderItemDetailComponent'
import {EmployeeListComponent} from './employee/EmployeeListComponent'
import {EmployeeDetailComponent} from './employee/EmployeeDetailComponent'
import {CustomerReviewListComponent} from './customerReview/CustomerReviewListComponent'
import {CustomerReviewDetailComponent} from './customerReview/CustomerReviewDetailComponent'

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  pipes: [ ],
  providers: [ ],
  directives: [ RouterActive , LoggedInRouterOutlet ],
  encapsulation: ViewEncapsulation.None,
  styles: [require('normalize.css'),require('./app.css')],
  templateUrl: './app/app.component.html'
})
@RouteConfig([
  { path: '/',      name: 'Index', component: Home, useAsDefault: true },
  { path: '/home',  name: 'Home',  component: Home },
  { path: '/login',  name: 'Login',  component: Login },
  { path: '/appUsers',  name: 'AppUsers',  component: AppUserListComponent },
  { path: '/appUsers/:id',  name: 'AppUserDetail',  component: AppUserDetailComponent },
  { path: '/appRoles',  name: 'AppRoles',  component: AppRoleListComponent },
  { path: '/appRoles/:id',  name: 'AppRoleDetail',  component: AppRoleDetailComponent },
  { path: '/groups',  name: 'Groups',  component: GroupListComponent },
  { path: '/groups/:id',  name: 'GroupDetail',  component: GroupDetailComponent },
  { path: '/products',  name: 'Products',  component: ProductListComponent },
  { path: '/products/:id',  name: 'ProductDetail',  component: ProductDetailComponent },
  { path: '/categorys',  name: 'Categorys',  component: CategoryListComponent },
  { path: '/categorys/:id',  name: 'CategoryDetail',  component: CategoryDetailComponent },
  { path: '/customers',  name: 'Customers',  component: CustomerListComponent },
  { path: '/customers/:id',  name: 'CustomerDetail',  component: CustomerDetailComponent },
  { path: '/customerOrders',  name: 'CustomerOrders',  component: CustomerOrderListComponent },
  { path: '/customerOrders/:id',  name: 'CustomerOrderDetail',  component: CustomerOrderDetailComponent },
  { path: '/orderItems',  name: 'OrderItems',  component: OrderItemListComponent },
  { path: '/orderItems/:id',  name: 'OrderItemDetail',  component: OrderItemDetailComponent },
  { path: '/employees',  name: 'Employees',  component: EmployeeListComponent },
  { path: '/employees/:id',  name: 'EmployeeDetail',  component: EmployeeDetailComponent },
  { path: '/customerReviews',  name: 'CustomerReviews',  component: CustomerReviewListComponent },
  { path: '/customerReviews/:id',  name: 'CustomerReviewDetail',  component: CustomerReviewDetailComponent },

	
  // Async load a component using Webpack's require with es6-promise-loader and webpack `require`
  { path: '/about', name: 'About', loader: () => require('es6-promise!./about')('About') }
])
export class App {
  angularclassLogo = 'assets/img/angularclass-avatar.png';
  loading = false;
  name = 'Angular 2 Webpack Starter';
  url = 'https://twitter.com/AngularClass';

  constructor(public appState: AppState) {}

  ngOnInit() {console.log('Initial App State', this.appState.state);}
}

