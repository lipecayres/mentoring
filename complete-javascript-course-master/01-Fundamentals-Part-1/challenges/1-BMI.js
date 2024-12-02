let markHeight, markWeight, johnHeight, johnWeight;
let markHigherBMI;

markHeight = 1.69;
markWeight = 78;
johnHeight = 1.95;
johnWeight = 92;

let markBMI = markWeight / markHeight ** 2;
let johnBMI = johnWeight / johnHeight ** 2;

markBMI > johnBMI ? console.log(`Mark's BMI ${markBMI} is higher than John's ${johnBMI}!`) : console.log(`John's BMI ${johnBMI} is higher than Mark's ${markBMI}`);

