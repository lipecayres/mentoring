/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log('Jonas')
console.log(23)

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Variable name conventions
let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Coder';
let myCurrentJob = 'Teacher';

let job1 = 'programmer'
let job2 = 'teacher'

console.log(myFirstJob)

let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

javascriptIsFun = 'YES!'
console.log(typeof javascriptIsFun);

let year;
console.log(year)
console.log(typeof year)

year = 1991;
console.log(typeof year)

console.log(typeof null)


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;

var job = 'programmer'
job = `teacher`;

lastName = 'Silva'
console.log(lastName);

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(ageJonas, ageSarah)

console.log(ageJonas + 2, ageJonas/10, 2**3)

const firstName = 'Jonas';
const lastName = 'Silva';
console.log(firstName + ' ' + lastName);

// assignment operators
let x = 10 + 5;
x += 10; // x = x + 10 = 25
x*= 4; // x = x * 4 = 100
x++; // x = x + 1
x--;
x--;
console.log(x)

// comparison operators

console.log(ageJonas>ageSarah); // <, > , <=, >=
console.log(ageSarah>=18)

const isFullAge = ageSarah >= 18;

console.log(now - 1991 > now - 2018)

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

const averageAge = (ageJonas + ageSarah) / 2;
console.log(ageJonas, ageSarah);

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonas = "I'm " + firstName + ', a ' + (year-birthYear) + ' years old ' + job + '!'
console.log(jonas)

const newJonas = `I'm ${firstName}, a ${year-birthYear} year old ${job}!`;
console.log(newJonas)

console.log(`Just a regular script...`);

console.log('String with \n\
multiple \n\
lines');

console.log(`String
with multiple
lines`)

const age = 15;

if(age >=18) {
    console.log(`Sarah can start driving lessons`)
} else {
    const yearsLeft = 18 - age;
console.log(`Sarah is too young. Wait another ${yearsLeft} years.`)
}

const birthYear = 1991;

let century;
if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}

console.log(century)

let markHeight, markWeight, johnHeight, johnWeight;
let markHigherBMI;

markHeight = 1.69;
markWeight = 78;
johnHeight = 1.95;
johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

markBMI > johnBMI ? console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`) : console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);


// type conversion
const inputYear = "1991";
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

console.log(Number("jonas"));
console.log(typeof NaN);

console.log(String(23), 23);

// type coercion
console.log("I'm am " + 23 + " years old");
console.log("23" - "10" - 3);
console.log('23'/'2');

let n = '1' + 1;
n = n-1;
console.log(n)


// 5 falsy values: 0, '', undefined, null, NaN.

console.log(Boolean(0))
console.log(Boolean(undefined))
console.log(Boolean('jonas'))
console.log(Boolean(''))

const money = 100;

if (money) {
    console.log(`Don't spend`)
} else {
    console.log(`You should get a job`)
}

let height = 0;

if (height) {
    console.log('YAY')
} else {
    console.log('no value')

}

const age = 18;

if(age === 18) console.log('Adult now')

console.log(18 === 18)    
*/

const hasDriverLicense = true; // A
const hasGoodVision = true; // B

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

const shouldDrive = hasDriverLicense && hasGoodVision;

/*
if(shouldDrive) {
    console.log('Sarah Drives');
} else {
    console.log('Someone else Drives');
}

const isTired = false; //C
console.log(hasDriverLicense && hasGoodVision && isTired)

if(hasDriverLicense && hasGoodVision && !isTired) {
    console.log('Sarah Drives');
} else {
    console.log('Someone else Drives');
}
// challenge 3
let scoreDolphins = (96 + 108 + 89) / 3;
let scoreKoalas = (88 + 91 + 110) / 3;

if (scoreDolphins > scoreKoalas) {
  console.log(`Dolphins win the trophy`);
} else if (scoreDolphins == scoreKoalas) {
  console.log("Both win the trophy");
} else {
    console.log("Koalas win the trophy");
}

const day = "tuesday";

// switch operator
switch (day) {
    case "monday": // day === 'monday'
    console.log("Plan course structure");
    console.log("Go to codind meetup");
    break;
    case "tuesday":
        console.log("Prepare videos");
    break;
    case "wednesday":
  case "thursday":
    console.log("write code examples");
    break;
    case "friday":
    console.log("record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("enjoy the weekend");
    break;
  default:
    console.log("not a valid day");
}

// if else statement
if (day === 'monday') {
    
} else if (day === 'tuesday') {
    
} else if (day === 'wednesday' || day === 'thursday') {
    
} else if (day === 'friday') {
    
} else if (day === 'saturday' || day === 'sunday') {

}

//statements and expressions

3 + 4;
1991;
true && false && !false;

if (23 > 10) {
  const str = "23 is bigger";
}

const me = 'jonas';
console.log(`I'm ${me}`);

const age = 23;

age >= 18 ? console.log('Wine!') : console.log('Water');

const drink = age >= 18 ? 'wine' : 'water';
console.log(drink)

let drink2;
if (age >= 18) {
    dink2 = 'wine';
} else {
    drink2 = 'Water';
}

console.log(`I like to drink ${age >= 18 ? 'wine' : 'water'}`)
*/
const bill = 50;
const tip = bill >= 50 && bill <= 200 ? bill * 0.15 : bill * 0.2;

console.log(
`
--  Payment Check  --      

Amount due: $${bill}
Tip: $${tip}

Total: $${bill+tip}

--  Thank you  --
`
);
