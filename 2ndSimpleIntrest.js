const readlineSync = require('readline-sync');
let principalAmount = readlineSync.questionInt("Enter the principal amount : \n ");
let intrestRate= readlineSync.questionInt("Enter the value of intrest rate : \n ");
let totalTime = readlineSync.questionInt("Enter the time in years : \n ");
let simpleIntrest = (principalAmount * totalTime * intrestRate) / 100;
console.log(`Simple intrest will be : ${simpleIntrest}.`);