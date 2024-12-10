// Remember, we're gonna use strict mode in all scripts now!
"use strict";
/* 
// 57. Learning how to code 

1. Goal: I want to land in a Software Developer position in 6 months or less (Jun 06, 2025)


// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = (arr) => {
  let min = 0,
  max = 0;
  arr.forEach((el) => {
    if (Number(el)) {
        if (el < min) min = el;
        if (el > max) max = el;
    }
});
  return max - min;
};

let amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);


// PROBLEM 2:
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? NO! Just merge two arrays

// 2) Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = (t1,t2) => {
    
    let arr = t1.concat(t2);
    console.log(arr)
    let min = 0,
    max = 0;
    arr.forEach((el) => {
        if (Number(el)) {
            if (el < min) min = el;
          if (el > max) max = el;
        }
    });
    return max - min;
  };
  
  let amplitudeNew = calcTempAmplitudeNew(temperatures,temperatures);
  console.log(amplitudeNew);
  
  const measureKelvin = function () {
    const measurement = {
      type:'temp',
      unit: 'celsius',
      //value: Number(prompt('Degrees celsius:'))
      value:10
    }
    
    const kelvin = measurement.value + 273;
    return kelvin
  }
  console.log(measureKelvin());

  const calcTempAmplitudeBug = (t1,t2) => {
    
    let arr = t1.concat(t2);
    console.log(arr)
    let min = 0,
    max = 0;
    arr.forEach((el) => {
        if (Number(el)) {
            if (el < min) min = el;
          if (el > max) max = el;
        }
    });
    return max - min;
  };
  
  let amplitudeBug = calcTempAmplitudeBug(temperatures,temperatures);
  console.log(amplitudeBug);
  */

  //CHALLENGE 1 - lesson 62

  /*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

const testData1 = [17, 21, 23];
const testData2 = [12, 5, -5, 0, 4];

const printForecast = (arr) => {
  let stringFinal = ``;
  for(let i=0, n = arr.length; i< n; i++) {
    stringFinal += `... ${arr[i]} ºC in ${i+1} days `
  };
  return stringFinal;
}

console.log(printForecast(testData1));
console.log(printForecast(testData1));
