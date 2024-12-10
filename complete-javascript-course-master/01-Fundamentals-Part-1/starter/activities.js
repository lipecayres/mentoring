/* variables */

const country = "Canada";
const continent = "America";
let population = 40_100_000;

console.log(country);
console.log(continent);
console.log(population);

// data types
const isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// let, const and var

language = "English";

//basic operators

console.log((newPopulation = population / 2));
console.log(++population);
population > 6000000 ? console.log("yes") : console.log("no");

population < 33000000 ? console.log("yes") : console.log("no");

description = `${country} is in ${continent}, and its ${population} million people speak ${language} `;
console.log(description);

// taking decisions

population < 33000000
  ? console.log(
      `${country} population is ${33000000 - population} million below average`
    )
  : console.log(`${country} population above average`);

// conversion and cohersion
/* 
console.log('9' - '5'); // -> 4 
console.log('19' - '13' + '17'); // -> 617
console.log('19' - '13' + 17); // -> 23
console.log('123' < 57); // -> false
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143
*/

// equality operators
/* 
numNeighbours = Number('1');

if (numNeighbours === 1) console.log("Only 1 border");

if (numNeighbours > 1) {
    console.log("More than 1 border");
} else if (numNeighbours < 1) {
    console.log("No borders");
}

// === doesn't allow type cohersion 
// == allow's type cohersion

*/

//logical operators
/* 
(population<50_000_000 && language == 'English' && isIsland == false) ? console.log(`You should live in ${country} :)`) : console.log(`${country} does not meet your criteria :(`) 
*/

// switch operator


switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoken language");
    break;
  default:
    console.log("Great language too :D");
    break;
}

//ternary operator

population > 33_000_000 ? console.log(`${country}'s population is above average`) : console.log(`${country}'s population is below average`)