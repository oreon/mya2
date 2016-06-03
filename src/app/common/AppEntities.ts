
	import {BaseEntity} from './BaseEntity';
	

 export interface AppUser   extends BaseEntity {
   userName:  string   
   password:  string   
   enabled:   boolean    
   appRoles:   AppRole   []
   groups:   Group   []
  
}




 export interface AppRole   extends BaseEntity {
   name:  string   
   appUsers:   AppUser   []
   groups:   Group   []
  
}




 export interface Group   extends BaseEntity {
   appUsers:   AppUser   []
   appRoles:   AppRole   []
  
}




 export interface Product   extends BaseEntity {
   name:  string   
   price:   number   
   image:   string   
   categorys:   Category   []
   displayTill:   Date    
  
}




 export interface Category   extends BaseEntity {
   products:   Product   []
   name:  string   
  
}




export  interface Customer   extends Person {
   customerOrder:   CustomerOrder   []
   customerReview:   CustomerReview   []
  
}




 export interface CustomerOrder   extends BaseEntity {
   orderItems:   OrderItem   []
   customer:   Customer   
   notes:  string   
  
}




 export interface OrderItem   extends BaseEntity {
   customerOrder:   CustomerOrder   
   qty:   number    
   product:   Product   
  
}




 export interface Person   extends BaseEntity {
   firstName:  string   
   lastName:  string   
  
}




 export interface Employee   extends Person {
   active:   boolean    
  
}




 export interface CustomerReview   extends BaseEntity {
   customer:   Customer   
   review:  string   
   rating:   number    
  
}



	