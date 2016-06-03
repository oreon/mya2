

import {BaseEntity} from '../common/BaseEntity';

export class Product extends BaseEntity {
   name  :  string
   price  :   Currency
   image  :   imageFile
   categorys  []:   Category 
   displayTill  :   Date

}
