// login.component.ts
import { Component } from 'angular2/core';
import { Router } from 'angular2/router';
import { UserService } from './userService';

@Component({
  selector: 'login',
  template: `<form (submit)="login($event, username.value, password.value)">
   <label for="username">Username</label>
   <!-- Using #username, we can identify this input to get the value on the form's submit event -->
   <input type="text" #username class="form-control" id="username" placeholder="Username">
   <label for="password">Password</label>
   <!-- Using #password we can identify this input to get its value -->
   <input type="password" #password class="form-control" id="password" placeholder="Password">
   <button type="submit">Submit</button>
 </form>`
})
export class LoginComponent {
  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  onSubmit(email, password) {
    this.userService.login(email, password).subscribe((result) => {
      if (result) {
        this.router.navigate(['Home']);
      }
    });
  }
}
