'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  type: 'premium',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  type: 'standard',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  type: 'premium',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  type: 'basic',
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

// Display account movements
const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, i) => {
    let transaction = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
        <div class="movements__row">
          <div class="movements__type movements__type--${transaction}">${
      i + 1
    } ${transaction}</div>
          <div class="movements__value">${mov}</div>
        </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

// Calculate and display balance
const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `$${acc.balance} CAD`;
};

//// Calculate and display summary
const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, cur) => acc + cur);

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, cur) => acc + cur);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(cur => (cur * acc.interestRate) / 100) //1.2% interest rate
    .filter((int, i, arr) => int > 1)
    .reduce((acc, cur) => acc + cur, 0);

  labelSumIn.textContent = `$${incomes}`;
  labelSumOut.textContent = `$${Math.abs(outcomes)}`;
  labelSumInterest.textContent = `$${interest}`;
};

const createUsernames = function (accounts) {
  accounts.forEach((acc, i) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(e => e[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  // Display Balance
  calcDisplayBalance(acc);
  // Display Summary
  calcDisplaySummary(acc);
};

//Event handler
let currentAccount;

btnLogin.addEventListener('click', e => {
  // Prevent form to submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner
      .split(' ')
      .at(0)}`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginPin.value = inputLoginUsername.value = '';
    inputLoginPin.blur();
    inputLoginUsername.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', e => {
  e.preventDefault();
  let amount = Number(inputTransferAmount.value);
  let receiver = accounts.find(acc => acc.username === inputTransferTo.value);
  inputTransferTo.value = inputTransferAmount.value = '';
  if (
    amount > 0 &&
    receiver &&
    amount <= currentAccount.balance &&
    receiver?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiver.movements.push(amount);

    updateUI(currentAccount);
  } else {
    console.log('Not Valid');
  }
});

btnLoan.addEventListener('click', e => {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= 0.1 * amount)) {
    // Add movement
    currentAccount.movements.push(amount);
  }
  // Update UI
  updateUI(currentAccount);

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', e => {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const indexAccount = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    // Delete account
    accounts.splice(indexAccount, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }
  inputClosePin.value = inputCloseUsername.value = '';
});

let sorted = false;
btnSort.addEventListener('click', e => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
/* 
const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);
*/

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////
/* 
let arr = ['a', 'b', 'c', 'd', 'e'];

// SLICE Method
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log([...arr]);

// SPLICE
// console.log(arr.splice(2))
arr.splice(-1);
console.log(arr);

// REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());

// CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log([...arr, ...arr2]);

// JOIN

console.log(letters.join('-'))

// AT method
const arr = [16,32,64]

console.log(arr[0])
console.log(arr.at(0))

// getting array's last element
console.log(arr[arr.length - 1])
console.log(arr.slice(-1)[0])
console.log(arr.at(-1))

console.log('felipe'.at(0))
console.log('felipe'.at(-1))



// loops on arrays

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach(function (e, i, arr) {
  let status = e > 0 ? 'deposited' : 'withdrew';
  console.log(`Mov ${i}: You ${status} ${Math.abs(e)}\n${arr}`);
});
// forEach doesn't work with break/continue

console.log('-------------------');
//for (let mov of movements) {
for (let [i, mov] of movements.entries()) {
  if (mov > 0) {
    console.log(`Movement ${i+1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i+1}: You withdrew ${Math.abs(mov)}`);
  }
}


// forEach with map and set

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'EUR', 'EUR', 'USD']);
console.log(currenciesUnique);
currenciesUnique.forEach((value, _, map) => {
  console.log(`${value}: ${value}`);
});

*/

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets

HINT: Use tools from all lectures in this section so far 😉

TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

GOOD LUCK 😀



let julia = [3, 5, 2, 12, 7];
let kate = [9, 16, 6, 8, 3];

let julia2 = [4, 1, 15, 8, 3];
let kate2 = [10, 5, 6, 1, 4];



const adultAge = 3;

const checkdogs = function (dogsJulia, dogsKate) {
  let realDogs = dogsJulia.slice(1, -2);

  let totalDogs = realDogs.concat(dogsKate);

  totalDogs.forEach((age, i) => {
    let message =
    age > adultAge
    ? `is an adult, and is ${age} years old`
    : 'is still a puppy';
    console.log(`Dog number ${i + 1} ${message}`);
  });
};

checkdogs(julia, kate);
checkdogs(julia2, kate2);

// map methods
const eurToUsd = 1.1;

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const movementsUSD = movements.map(e => e * eurToUsd);

const movementsUSDfor = [];
for (const e of movements) movementsUSDfor.push(e * eurToUsd);

console.log(movements);
console.log(movementsUSD);
console.log(movementsUSDfor);

const movementDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
  mov
    )}`
);
console.log(movementDescriptions);


// filter method 
let deposits , withdraw
deposits = movements.filter(e => e > 0);
withdraw = movements.filter(e => e < 0);
console.log(deposits)
console.log(withdraw)

// reduce method

// accumulator -> snowball (put all together)
const balance = movements.reduce(function (acc, cur, i, arr) {
  console.log(`Iteraction ${i}: ${acc}`);
  return acc + cur;
}, 0);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2)

// max value 

const max = movements.reduce((acc,mov) => acc > mov ? acc : mov)

console.log(max)

// CHALLENGE 2

let julia = [9, 16, 6, 8, 3];
let kate = [9, 16, 6, 8, 3];

let julia2 = [4, 1, 15, 8, 3];
let kate2 = [10, 5, 6, 1, 4];

const adultAge = 3;

const calcAverageHumanAge = function (arr) {
  const humanAges = arr.map(age => (age <= 2 ? 2 * age : 4 * age + 16));
  console.log(humanAges);
  
  let adultDogs = humanAges.filter(age => age >= 18);
  console.log(adultDogs);
  
  let averageAdultAge = humanAges.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  console.log(averageAdultAge);
  return averageAdultAge;
};

calcAverageHumanAge(julia);
calcAverageHumanAge(kate2);

const me = {
  name: 'Felipe',
  age: 30,
  year: 1991,
  calcAge() {
    return 2024 - this.year;
  },
};


const eurToUsd = 1.1;

const totalDepositsUSD = movements
.filter(mov => mov > 0)
.map(mov => mov * eurToUsd)
.reduce((acc, cur) => acc + cur);

console.log(totalDepositsUSD);

// challenge 3

const calcAverageHumanAge = function (arr) {
  return arr
    .map(age => (age <= 2 ? 2 * age : 4 * age + 16))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  };
  
  
  let julia2 = [10,10,10];
  console.log(calcAverageHumanAge(julia2))
  
  // find method
  
  const firstWithdraw = movements.find(mov => mov < 0)
  
  console.log(movements)
  console.log(firstWithdraw)
  
  
  const account = accounts.find(acc => acc.owner === 'Jessica Davis')
  console.log(account)
  
  // findLast and findLastIndex
  
  console.log(movements);
  const lastWithdrawal = movements.findLast(mov => mov < 0);
console.log(lastWithdrawal);

const latestLargeMovementIndex = movements.findLastIndex(mov => Math.abs(mov) > 2000);

console.log(latestLargeMovementIndex);
console.log(`Your lastest was ${movements.length - latestLargeMovementIndex}`)

// some and every / includes

// Equality
console.log(movements.includes(-130));

//Condition
console.log(movements.some(mov => mov > 0));

const anyDeposits = movements.some(mov => mov > 0);
console.log(anyDeposits);

// EVERY - all elements satisfies the condition
console.log(account4.movements.every(mov => mov > 0));

// Separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))

const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());

const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat());
console.log(arrDeep.flat(2));

const accountsMovements = accounts.map(acc => acc.movements);
console.log(accountsMovements);
const allMovements = accountsMovements.flat();
console.log(allMovements);

const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);

// flat
const the2overallBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);

  console.log(the2overallBalance)
  
  // flatMap
  
  const the3overallBalance = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
  
  console.log(the3overallBalance)
  */

///////////////////////////////////////
// Coding Challenge #4

/* 
Julia and Kate are still studying dogs, and this time they are studying if dogs are eating too much or too little.
Eating too much means the dog's current food portion is larger than the recommended portion, and eating too little is the opposite.
Eating an okay amount means the dog's current food portion is within a range 10% above and 10% below the recommended portion (see hint).

1. Loop over the array containing dog objects, and for each dog, calculate the recommended food portion and add it to the object as a new property. Do NOT create a new array, simply loop over the array. Forumla: recommendedFood = weight ** 0.75 * 28. (The result is in grams of food, and the weight needs to be in kg)
2. Find Sarah's dog and log to the console whether it's eating too much or too little. HINT: Some dogs have multiple owners, so you first need to find Sarah in the owners array, and so this one is a bit tricky (on purpose) 🤓
3. Create an array containing all owners of dogs who eat too much ('ownersEatTooMuch') and an array with all owners of dogs who eat too little ('ownersEatTooLittle').
4. Log a string to the console for each array created in 3., like this: "Matilda and Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat too little!"
5. Log to the console whether there is any dog eating EXACTLY the amount of food that is recommended (just true or false)
6. Log to the console whether there is any dog eating an OKAY amount of food (just true or false)
7. Create an array containing the dogs that are eating an OKAY amount of food (try to reuse the condition used in 6.)
8. Create a shallow copy of the dogs array and sort it by recommended food portion in an ascending order (keep in mind that the portions are inside the array's objects)

HINT 1: Use many different tools to solve these challenges, you can use the summary lecture to choose between them 😉
HINT 2: Being within a range 10% above and below the recommended portion means: current > (recommended * 0.90) && current < (recommended * 1.10). Basically, the current portion should be between 90% and 110% of the recommended portion.

GOOD LUCK 😀
TEST DATA:

*/
const dogs = [
  { weight: 22, currFood: 80, owners: ['Alice', 'Bob'] },
  { weight: 8, currFood: 200, owners: ['Matilda'] },
  { weight: 13, currFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, currFood: 340, owners: ['Michael'] },
];

//1(
dogs.forEach(
  dog => (dog.recommendedFood = Math.floor(dog.weight ** 0.75 * 28))
);
console.log(dogs);

//2
let task2 = dogs.find(dog => dog.owners.includes('Sarah'));
let foodStatus;

const checkDogsPortion = dog => {
  if (dog.currFood > 1.1 * task2.recommendedFood) {
    return `too-much`;
  } else if (dog.currFood > 0.9 * task2.recommendedFood) {
    return `average`;
  } else {
    return `too-low`;
  }
};

console.log(`Sarah's dog is eating ${checkDogsPortion(task2)}`);

//3

const ownersEatTooMuch = dogs
  .filter(dog => dog.currFood > 1.1 * dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.currFood < 0.9 * dog.recommendedFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4

console.log(`${ownersEatTooMuch.join(' and ')} are eating too much`);

console.log(`${ownersEatTooLittle.join(' and ')} are eating too little`);

//5
console.log(dogs.some(dog => dog.currFood === dog.recommendedFood));

//6

const dogsEatingOkay = dog =>
  dog.currFood < 1.1 * dog.recommendedFood &&
  dog.currFood > 0.9 * dog.recommendedFood;

console.log(dogs.some(dogsEatingOkay));

//7
console.log(dogs.filter(dogsEatingOkay));

// 8
const dogsSortedByRecommendedFood = dogs.toSorted(
  (a, b) => a.recommendedFood - b.recommendedFood
);
console.log(dogsSortedByRecommendedFood);

// 9

const dogsGroupedByPortion = Object.groupBy(dogs, dog => {
  if (dog.currFood > 1.1 * task2.recommendedFood) {
    return `too-much`;
  } else if (dog.currFood > 0.9 * task2.recommendedFood) {
    return `average`;
  } else {
    return `too-low`;
  }
});
console.log(dogsGroupedByPortion);

// 10

const dogsGroupedByOwner = Object.groupBy(dogs, dog => `${dog.owners.length}-owners`)
console.log(dogsGroupedByOwner);

/*
// Sort Method

// Strings
const owners = ['Jonas', 'Martha', 'Adam', 'Zach'];
console.log(owners.sort());

//Numbers
console.log(movements);

//return <0, A,B (keep order)
// return > 0 , B,A (switch order)

// Ascending order
movements.sort((a, b) => a - b);
console.log(movements);

//Descending order
movements.sort((a, b) => a - b);
console.log(movements);

// Grouping

const groupedMovements = Object.groupBy(movements, mov =>
  mov > 0 ? 'deposit' : 'withdrawal'
);

console.log(groupedMovements);

const groupedAccounts = Object.groupBy(accounts, acc => {
  let movementsAmount = acc.movements.length;
  
  if (movementsAmount >= 8) return `very active`;
  if (movementsAmount >= 4) return `active`;
  if (movementsAmount >= 1) return `moderate`;
  return `inactive`;
});

console.log(groupedAccounts);

const accByType = Object.groupBy(accounts, ({ type }) => type);

console.log(accByType);

// create array programatically
const arr = [1, 2, 3, 4, 5, 6, 7];
console.log(new Array(1, 2, 3, 4, 5, 6, 7));

// empty arrays + fill method
const x = new Array(7);
console.log(x);
x.fill(1, 3, 5); //(value, start, end)
x.fill(1);
console.log(x);

arr.fill(23, 2, 6);
console.log(arr);

// Array.from
const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

labelBalance.addEventListener('click', e => {
  e.preventDefault();
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value')
  , el => Number(el.textContent));
  
  const movementsUI2 = [...document.querySelectorAll('.movements__value')]
  
  console.log(movementsUI)
  console.log(movementsUI2)
});


// Non destructive alternatives to Arrays.

//toReversed instead reverse
console.log(movements);
const reverseMov = movements.toReversed();
console.log(reverseMov);
console.log(movements);

//toSorted instead sort / toSpliced (splice)

//movements[1] = 2000

const newMovements = movements.copyWithin(1, 2000);
console.log(newMovements);
console.log(movements);


//1
const bankDepositSum = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 0)
.reduce((acc, cur) => acc + cur);
console.log(bankDepositSum);

//2
const numDeposits1000 = accounts
.flatMap(acc => acc.movements)
.filter(mov => mov > 1000).length;

const numDeposits1000second = accounts
.flatMap(acc => acc.movements)
.reduce((sum, cur) => (cur >= 1000 ? ++sum : sum), 0);

console.log(numDeposits1000);
console.log(numDeposits1000second);

//3

const { deposits, withdrawals } = accounts
.flatMap(acc => acc.movements)
.reduce(
    (sums, cur) => {
      //  cur > 0 ? (sums.deposits += cur) : (sums.withdrawals += cur);
      sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
      
      return sums;
    },
    { deposits: 0, withdrawals: 0 }
  );
  
  console.log(deposits, withdrawals);
  
// 4.

const convertTitleCase = function (title) {
  const capitalize = str => str[0].toUpperCase() + str.slice(1);

  const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];
  
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(el =>
      exceptions.includes(el) ? el : el.at(0).toUpperCase() + el.slice(1)
    )
    .join(' ');
    
    return capitalize(titleCase);
  };
  
  console.log(convertTitleCase('this is a nice title'));
  console.log(convertTitleCase('this is a LONG title but not too long'));
  console.log(convertTitleCase("and here's another tithe with an EXAMPLE"));
  
  */
