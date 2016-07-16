import { Headers } from '@angular/http';

export const contentHeaders = new Headers();
contentHeaders.append('Accept', 'application/json');
contentHeaders.append('Content-Type', 'application/json');
//contentHeaders.append('bearer', localStorage.getItem('jwt') );
//"Access-Control-Allow-Origin", "*"
//contentHeaders.append('xxx', 'cust-hdr');
