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
*/

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
