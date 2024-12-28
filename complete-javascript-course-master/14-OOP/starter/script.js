'use strict';
/* 
const Person = function (fullName, birthYear) {
  this.fullName = fullName;
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

console.log(jack.hasOwnProperty('fullName'));
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

/*
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
*/
/*
// ES6 Classes

// class declaration
class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // Methods will be to .prototype property
  // Instance methods
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.fullName}`);
  }

  get age() {
    return 2037 - this.age;
  }

  // getters and setters in JS
  // set a property that already exists
  set fullName(name) {
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('Hey there');
    console.log(this);
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

console.log(jessica.__proto__ === PersonCl.prototype);

// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.fullName}`);
// };

jessica.greet();

// 1. Classes are NOT hoisted
// 2. Class are first-class citizes
// 3. Classes are executed in strict mode

const walter = new PersonCl('Walter White', 1992);
console.log(walter);

PersonCl.hey()

// getters and setters

const account = {
  owner: 'felipe',
  movements: [100, 45, 94, 299, 400],

  get latest() {
    return this.movements.slice(-1).pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};

console.log(account.latest);

account.latest = 50;
console.log(account.movements);
*/

// Object.create class

const PersonProto = {
  calcAge() {
    console.log(2037 - this.birthYear);
  },
  init(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  },
};

const steven = Object.create(PersonProto);
console.log(steven);
steven.name = 'Steven';
steven.birthYear = 2002;
steven.calcAge();

console.log(steven.__proto__ === PersonProto);

const sarah = Object.create(PersonProto);
sarah.init('Sarah', 1979);
sarah.calcAge();

// Challenge 2

//1.
class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`The ${this.make} car is driving at ${this.speed}km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`The ${this.make} car is driving at ${this.speed}km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    return this.speed = speed * 1.6;
  }
}

const ford = new Car('Ford', 120);
console.log(ford.speedUS)
ford.accelerate();
ford.accelerate();
ford.brake();


ford.speedUS =50;
console.log(ford)

// 2.
