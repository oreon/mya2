

@Component({
  selector: 'customer-view',
  templateUrl: './app/customer/customerViewComponent.html',
  directives: [  CustomerOrderDetailComponent ,CustomerReviewDetailComponent ]
})
export class CustomerViewComponent  extends BaseDetailComponent<Customer> implements OnInit {
  
  @Input()
  customer: Customer;
  
  @Input()
  protected embedded:boolean = false
 
  constructor(
  	
    protected _customerService: CustomerService,
    protected _routeParams: RouteParams,
    protected _router: Router	
  ) {
    super( _customerService,  _routeParams, _router);
  }
  
   setRecord( customer:Customer){this.customer = customer;} 
   getRecord():Customer{return this.customer;}
  
  createInstance():Customer { return <Customer>{}; }
  getSuccessUrl():string { return 'Customers'}
  
  ngOnInit() {
    super.ngOnInit();  
  }
  

}
