export class Hero {
  id: number;
  name: string;
  skills: Skill[];

}

export class Skill {
    id: number;
    skill: SkillType;
    rating:number;

    get skillType() : SkillType {
      return this.skill;
  }
  set skillType(value : SkillType) {
      this.skill= value;
  }
}

export class SkillType {
    id: number;
    name: string;
}




/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
