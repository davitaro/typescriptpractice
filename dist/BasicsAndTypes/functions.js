"use strict";
const sum = (num1, num2) => {
    return num1 + num2;
};
const printResults = (num) => {
    console.log("result is: ", num);
};
const addAndHandle = (num1, num2, cb) => {
    const result = num1 + num2;
    cb(result);
};
printResults(sum(5, 12));
let combinedValues;
combinedValues = sum;
console.log(combinedValues(8, 8));
addAndHandle(3, -2, (result) => console.log("result of add and handle is ", result));
