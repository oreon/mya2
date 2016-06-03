import {Component} from '@angular/core';
import {AppState} from '../app.service';

import {Title} from './title';
import {XLarge} from './x-large';

import {Friend} from './Friend'
import {FriendEntity} from './FriendEntity'


import { Router } from '@angular/router-deprecated';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [
    XLarge, Friend
  ],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./home.html')
})
export class Home {
  // Set our default values
  localState = { value: '' };

  friends:FriendEntity[] = [{"firstName":"alex","lastName":"jones"}, {"firstName":"Mike","lastName":"stu"}]
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title, public router: Router) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  logout() {
    localStorage.removeItem('jwt');
    this.router.navigateByUrl('/login');
  }

  submitState(value) {
    console.log('submitState', value);
    this.appState.set('value', value);
  }

  addEmployeeSkill(){
    var friend:FriendEntity= <FriendEntity>{} ;
    this.friends.push(friend);
  }

  removeEmployeeSkill(index:number){
    this.friends.splice(index, 1);
  }

  onEmployeeSkillChanged(newValue, index) {
    console.log(newValue);
  //  var current:Skill =  this.skills.filter(skill=> {return newValue == skill.id})[0];
  //  this.employee.employeeSkills[index].skill = current;
  }

}
