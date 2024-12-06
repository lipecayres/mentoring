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
  */