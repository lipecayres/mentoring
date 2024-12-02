let markHeight, markWeight, johnHeight, johnWeight;
let height, weight;
let markHigherBMI;

markHeight = 1.69;
markWeight = 78;
johnHeight = 1.95;
johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

markHeight = 1.88;
markWeight = 95;
johnHeight = 1.76;
johnWeight = 85;

markBMI = markWeight / markHeight ** 2;
johnBMI = johnWeight / johnHeight ** 2;

markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);
