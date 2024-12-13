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

*/

// CHALLENGE 1

/* 
Let's build a simple poll app!

A poll has a question, an array of options from which people can choose, and an array with the number of replies for each option. This data is stored in the starter object below.

Here are your tasks:

1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
  1.1. Display a prompt window for the user to input the number of the selected option. The prompt should look like this:
        What is your favourite programming language?
        0: JavaScript
        1: Python
        2: Rust
        3: C++
        (Write option number)
  
  1.2. Based on the input number, update the answers array. For example, if the option is 3, increase the value AT POSITION 3 of the array by 1. Make sure to check if the input is a number and if the number makes sense (e.g answer 52 wouldn't make sense, right?)
2. Call this method whenever the user clicks the "Answer poll" button.
3. Create a method 'displayResults' which displays the poll results. The method takes a string as an input (called 'type'), which can be either 'string' or 'array'. If type is 'array', simply display the results array as it is, using console.log(). This should be the default option. If type is 'string', display a string like "Poll results are 13, 2, 4, 1". 
4. Run the 'displayResults' method at the end of each 'registerNewAnswer' method call.

HINT: Use many of the tools you learned about in this and the last section 😉

BONUS: Use the 'displayResults' method to display the 2 arrays in the test data. Use both the 'array' and the 'string' option. Do NOT put the arrays in the poll object! So what shoud the this keyword look like in this situation?

BONUS TEST DATA 1: [5, 2, 3]
BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

GOOD LUCK 😀

*/

const poll = {
  question: `What's your favourite programming language?`,
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    let ans = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );

    typeof ans === 'number' && ans < this.answers.length && this.answers[ans]++;
    this.displayResults();

    /*
    
    // Answer validation
    ans = ans.trim();
    if (ans == '') ans = -1;
    ans = Number(ans);
    
   if (typeof ans == 'number' && ans >= 0 && ans < this.answers.length) {
    this.answers[ans]++;
    this.displayResults();
  } else {
    alert('Invalid number');
}
*/
  },

  displayResults(type = 'array') {
    type = prompt('How to you want to see it? Array ot String?');

    if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}.`);
    } else {
      console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

//  BONUS TEST DATA 1: [5, 2, 3]
//  BONUS TEST DATA 2: [1, 5, 3, 9, 6, 1]

poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });
 