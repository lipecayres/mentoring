"use strict";
/* 
let hasDriverLicense = false;
const passTest = true;

if(passTest) hasDriverLicense = true;
if(hasDriverLicense) console.log('Drive!')

// const interface = 'Audio';
// const private = 345;


//functions

function logger() {
    console.log("My name is Jonas");
}

// calling, running or invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges!`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(fruitProcessor(5, 0));

const appleAndOrangeJuice = fruitProcessor(2, 4);
console.log(appleAndOrangeJuice);

const number = Number('23')

// function declarations

function calcAge1(birthYear) {
  return 2037 - birthYear;
}

const age1 = calcAge1(1993);
console.log(age1);

// function expressions
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

const age2 = calcAge2(1992);

console.log(age1, age2)


// arrow function - doesn't allow .this method
const calcAge2 = function (birthYear) {
    return 2037 - birthYear;
};

const calcAge3 = birthYear => 2037 - birthYear
const age3 = calcAge3(1991)
console.log(age3)

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2024 - birthYear;
    const retirement = 65 - age;
    return `${firstName} is retiring in ${retirement} years`
}

console.log(yearsUntilRetirement(1993, 'Felipe'))

function cutFruitPieces(fruit) {
    return fruit*4;
}


function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);
    
    const juice = `Juice with ${applePieces} apple pieces and ${orangePieces} orange pieces!`;
    return juice;
}

console.log(fruitProcessor(2,3))

const calcAverage = (a, b, c) => {
    return (a + b + c) / 3;
};

let scoreDolphins = calcAverage(30, 30, 30);
let scoreKoalas = calcAverage(10, 10, 10);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) {
    console.log(`Dolphins wins (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas > 2 * avgDolphins)
    console.log(`Koalas wins (${avgDolphins} vs. ${avgKoalas})`);
    else {
        console.log(`No team wins`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

checkWinner(600, 214);

const myFunc = function (a, b) {
    return a + b;
};


// Arrays part 1

const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends);

const y = new Array(1991, 1984, 2008, 2020, 2018);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = "Jay";
console.log(friends);
// friends = ['Bob', 'Alice'] - ilegal redeclaration

const firstName = "Jonas";
const jonas = [firstName, "Silva", 2037 - 1991, "teacher", friends];
console.log(jonas);
console.log(jonas.length);

const calcAge2 = function (birthYear) {
  return 2037 - birthYear;
};

const years = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge2(years[0])
const age2 = calcAge2(years[1])
const age3 = calcAge2(years[years.length-1])
console.log(age1, age2, age3)

const age = [calcAge2(years[0]),calcAge2(years[1]), calcAge2(years[years.length-1])]


//Arrays part 2

const friends = ["Michael", "Steven", "Peter"];
const newLenght = friends.push('Jay');
console.log(friends)
console.log(newLenght)

friends.unshift('John');
console.log(friends)

// remove elements

friends.pop() //last
const popped = friends.pop()
console.log(popped)
console.log(friends)

friends.shift(); // remove first
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(23)
console.log(friends.includes('Steven'))
console.log(friends.includes('Bob'))
console.log(friends.includes(23))

if(friends.includes('Steven')) {
  console.log('You have a friend called Steven')
}

// challenge 2

const calcTip = (bill) =>
  bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

const bills = [125, 155, 44];
const tip = [];
const totals = [];

bills.forEach((bill) => {
  let eachTip = calcTip(bill) 
  tip.push(eachTip);
  totals.push(bill+eachTip)
});

console.log(tip)
console.log(totals)

*/

