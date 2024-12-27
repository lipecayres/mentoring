'use strict';

const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;

  // Never do this :
  // this.calcAge = function() {
  //     console.log(2037 - birthYear);
  // }
};

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);
console.log(jack instanceof Person);

// Prototypes

console.log(Person.prototype)

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jack.calcAge()
matilda.calcAge()

console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jack))
console.log(Person.prototype.isPrototypeOf(matilda))
console.log(Person.prototype.isPrototypeOf(Person))

Person.prototype.species = 'Homo Sapiens'
console.log(jack.species, matilda.species)
console.log(jack.hasOwnProperty('firstName'))
console.log(jack.hasOwnProperty('species'))