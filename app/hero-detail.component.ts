import { Component, Input, OnInit } from 'angular2/core';
import { RouteParams } from 'angular2/router';

import { Skill} from './hero';

import { SkillType } from './hero';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/hero-detail.component.html',
  styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  skills:SkillType[] = [
   {"name": "Speed", id:1},
   {"name": "Strenth", id:2},
   {"name": "Agility", id:3}
 ];

  constructor(
    private _heroService: HeroService,
    private _routeParams: RouteParams) {
  }

  ngOnInit() {
    let id = +this._routeParams.get('id');
    this._heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }

  addSkill(){
  //  var skl:Skill= new Skill() ;
  //  var skl.setSkillType();
    this.hero.skills.push(new Skill());

  }

  removeSkill(index:number){
    this.hero.skills.splice(index, 1);
  }

  onSkillChanged(newValue, index) {
    console.log(newValue);
    var current:SkillType =  this.skills.filter(skill=> {return newValue == skill.id})[0];
    this.hero.skills[index].skillType = current;
  }

}


/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
