import {Component, Input} from '@angular/core';
import {AppState} from '../app.service';

import {Title} from './title';
import {XLarge} from './x-large';

import { Router } from '@angular/router-deprecated';
import {FriendEntity} from './FriendEntity'
import {Hobby} from './Hobby'

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'friend',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  //providers: [Title],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [Hobby],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./Friend.html')
})
export class Friend {
  // Set our default values
  localState = { value: '' };
  hobbies:string[]= ['reading'];

  @Input()
  entity :FriendEntity;
  // TypeScript public modifiers
  constructor() {

  }

  ngOnInit() {
    console.log('hello `friend` component');
    console.log(this.entity.firstName)
    //this.name = 'foo'
    // this.title.getData().subscribe(data => this.data = data);
  }


    addHobby(){
      var friend:FriendEntity= <FriendEntity>{} ;
      this.hobbies.push(' ');
    }

    removeHobby(index:number){
      this.hobbies.splice(index, 1);
    }

}
