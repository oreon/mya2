export class Employee {
  id: number;
  firstName: string;
  lastName:string;
  //dob:Date
  gender:string;
 employeeSkills: EmployeeSkill[];

}


export class EmployeeSkill {
  id: number;
  skill: Skill;
  experience:number;

  get skillType() : Skill{
    return this.skill;
}
set skillType(value : Skill) {
    this.skill= value;
}

}


export class Skill {
    id: number;
    name: string;
}
