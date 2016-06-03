import {BaseEntity} from '../common/BaseEntity';

export class CustomerOrder extends BaseEntity {
   orderItems  []:   OrderItem
   customer  :   Customer
   notes  :  string

}
