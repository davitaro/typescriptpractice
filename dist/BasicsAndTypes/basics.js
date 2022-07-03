"use strict";
const add = (n1, n2, showResult, phrase) => {
    const result = n1 + n2;
    if (showResult) {
        console.log(`${phrase} ${result}`);
    }
    return result;
};
const numb1 = 5;
const numb2 = 2.8;
const printResult = true;
const resultPhrase = "result is: ";
add(numb1, numb2, printResult, resultPhrase);
