'use strict';

/* 
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function(str) {
    const [first, ...others] = str.split(' ')
    return [first.toUpperCase(), ...others].join(' ')
}

const transformer = function (str, fn) {
    console.log(`Original: ${str}`)
    console.log(`Transformed: ${fn(str)}`)
    console.log(`Original: ${fn.name}`)
}

transformer('JavaScript is the best', upperFirstWord);
transformer('JavaScript is the best', oneWord);

// functions returning another functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
};
};

let greeterHey = greet('Hey');
greeterHey('Felipe');

greet('Hey')('Felipe');

const greet2 = greeting => name => console.log(`${greeting} ${name} `);

greet2('Hello')('You')

*/

//

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  booking: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );

    this.booking.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(1212, 'Felipe');
lufthansa.book(1234, 'Marcos');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  booking: [],
};

const book = lufthansa.book;

book.call(eurowings, 23, 'Felipe');

console.log(eurowings);

book.call(lufthansa, 2332, 'John');
console.log(lufthansa);

const swiss = {
  airline: 'swiss',
  iataCode: 'LX',
  booking: [],
};

// Call method
book.call(swiss, 4322, 'Mary Cooper');
console.log(swiss);

// Apply method
const flightData = [2442, 'David'];
book.apply(swiss, flightData);
console.log(swiss);

// Best practice

book.call(swiss, ...flightData);

// Bind Method

const bookEW = lufthansa.book.bind(eurowings);
const bookLT = lufthansa.book.bind(lufthansa);
const bookSW = lufthansa.book.bind(swiss);

bookEW(5566, 'John A');

const bookEw23 = lufthansa.book.bind(eurowings, 2310);

bookEw23('Marlec');

// Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// partial application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);

// addVAT = (value) => value + value * 0.23;
console.log(addVAT(200));

const newTax = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addNewTax = newTax(0.23)
console.log(addNewTax(200))
