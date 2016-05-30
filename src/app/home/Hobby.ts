import {Component, Input} from '@angular/core';
import {AppState} from '../app.service';

import {Title} from './title';
import {XLarge} from './x-large';

import { Router } from '@angular/router-deprecated';
import {FriendEntity} from './FriendEntity'

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'hobby',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  //providers: [Title],
  // We need to tell Angular's compiler which directives are in our template.
  // Doing so will allow Angular to attach our behavior to an element
  directives: [XLarge],
  // We need to tell Angular's compiler which custom pipes are in our template.
  pipes: [ ],
  // Our list of styles in our component. We may add more to compose many styles together
  styles: [ require('./home.css') ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  template: require('./hobby.html')
})
export class Hobby {
  // Set our default values
  localState = { value: '' };

  @Input()
  name :string;
  // TypeScript public modifiers
  constructor() {

  }

}
