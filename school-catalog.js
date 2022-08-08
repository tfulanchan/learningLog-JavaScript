// https://www.codecademy.com/courses/learn-intermediate-javascript/projects/school-catalog

class School {
  constructor(name, level, numberOfStudents) {
    this._name = name;
    this._level = level
    this._numberOfStudents = numberOfStudents;
  }
  get name() {
    return this._name;
  }
  get level(){
    return this._level
  }
  get numberOfStudents(){
    return this._numberOfStudents
  }
  set numberOfStudents(num){
    if (num.isNaN()){console.log('Invalid input: numberOfStudents must be set to a Number.')}
    else
    {this._numberOfStudents = number}
  } 
  quickFacts() {
    console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level`)
  }
  static pickSubstituteTeacher(substituteTeachers) {
    const index = Math.floor(Math.random()*substituteTeachers.length)
    return substituteTeachers[index]
  }
}
class PrimarySchool extends School {
  constructor(name, numberOfStudents, pickupPolicy) {
    super(name);
    this._numberOfStudents = numberOfStudents;
    this._level = 'primary';
    this._pickupPolicy  = pickupPolicy;
  } 
  get pickupPolicy(){
    return this._pickupPolicy
  }
}
class HighSchool extends School {
  constructor(name, numberOfStudents, sportsTeams) {
    super(name);
    this._level = 'high';
    this._sportsTeams  = sportsTeams;
  } 
  get sportsTeams(){
    return this._sportsTeams
  }
}
// create a PrimarySchool instance
  const lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514,  'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts()

// pick a teacher randomly
const teacherSelected = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])
console.log(teacherSelected)

// create a HighSchool instance
  const alSmith = new HighSchool('Al E. Smith', 415,  ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'])
  console.log(alSmith.sportsTeams)
