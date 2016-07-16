

import {Component} from '@angular/core';

//import { Component } from '@angular2/core';
import { Router } from '@angular/router-deprecated';
import { CORE_DIRECTIVES, FORM_DIRECTIVES } from '@angular/common';
import { Http, Headers } from '@angular/http';
import { contentHeaders } from '../common/headers';

import { ROUTER_PROVIDERS } from '@angular/router';

let styles   = require('./login.css');
let template = require('./login.html');

@Component({
  selector: 'login',
  //directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_PROVIDERS ],
  template: template,
  styles: [ styles ]
})
export class Login {
  constructor(public router: Router, public http: Http) {
  }

  login(event, username, password) {
    event.preventDefault();
    let body = JSON.stringify({ username, password });
    this.http.post('http://localhost:8000/api-token-auth/', body, { headers: contentHeaders })
      .subscribe(
        response => {
          console.log(response.json())
          localStorage.setItem('jwt', response.json()["token"]);
           localStorage.setItem('id-token', response.json()["token"]);
          this.router.navigateByUrl('/home');
        },
        error => {
          alert(error.text());
          console.log(error.text());
        }
      );
  }

  signup(event) {
    event.preventDefault();
    this.router.navigateByUrl('/signup');
  }
}
