'use strict';

const jessica = {
    firstName: 'Jessica',
    lastName: 'Williams',
    age: 27,
    family: ['Alice', 'Bob']
}
/* 
// Shalow copy
const jessicaCopy = {...jessica}
jessicaCopy.lastName = 'Davis'

console.log(jessica, jessicaCopy)
console.log('---------------------------')

jessicaCopy.family.push('Mary')
jessicaCopy.family.push('John')
console.log(jessica, jessicaCopy)

*/
// Deep clone/copy

const jessicaClone = structuredClone(jessica)

jessicaClone.lastName = 'Davis'

console.log(jessica, jessicaClone)
console.log('---------------------------')

jessicaClone.family.push('Mary')
jessicaClone.family.push('John')
console.log(jessica, jessicaClone)
