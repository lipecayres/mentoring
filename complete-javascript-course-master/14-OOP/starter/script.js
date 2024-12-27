'use strict';
/* 
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

console.log(Person.prototype);

Person.prototype.calcAge = function () {
  console.log(2037 - this.birthYear);
};

jack.calcAge();
matilda.calcAge();

console.log(jack.__proto__);
console.log(jack.__proto__ === Person.prototype);

console.log(Person.prototype.isPrototypeOf(jack));
console.log(Person.prototype.isPrototypeOf(matilda));
console.log(Person.prototype.isPrototypeOf(Person));

Person.prototype.species = 'Homo Sapiens';
console.log(jack.species, matilda.species);

console.log(jack.hasOwnProperty('firstName'));
console.log(jack.hasOwnProperty('species'));

console.log(jack.__proto__);
// Object.prototype (top of prototype chain)
console.log(jack.__proto__.__proto__);
console.log(jack.__proto__.__proto__.__proto__);

console.log(Person.prototype.constructor);

const arr = [3, 3, 3, 3, 4, 4, 4, 5, 6, 7, 8]; // new Array === []
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);

// Never do this
Array.prototype.unique = function () {
  return [...new Set(this)];
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(x => x + 1);
*/

// Challenge 1

const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The ${this.make} car is driving at ${this.speed}km/h`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The ${this.make} car is driving at ${this.speed}km/h`);
};

//Data 1:
const car1 = new Car('BWM', 120);
const car2 = new Car('Mercedez', 95);

car1.accelerate();
car1.accelerate();
car1.brake();

car2.accelerate();
car2.brake();
