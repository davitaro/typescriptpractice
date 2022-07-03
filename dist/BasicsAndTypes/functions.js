"use strict";
const add = (num1, num2) => {
    return num1 + num2;
};
//return type: void b/c doesn't return anything
//undefined can be a type for a variable, but not return type usually....
const printResult = (num) => {
    console.log("result is: ", num);
};
const addAndHandle = (num1, num2, cb) => {
    const result = num1 + num2;
    cb(result);
};
printResult(add(5, 12));
//accept any function that accpets two numbers and returns a number
let combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
addAndHandle(3, -2, (result) => console.log("result of add and handle is ", result));
