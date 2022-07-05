"use strict";
const combine = (input1, input2, resultConversion) => {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = `${input1}${input2}`;
    }
    return result;
};
const combinedAges = combine(30, 26, "as-number");
console.log("combined ages:", combinedAges);
const combinedStringAges = combine("30", "26", "as-number");
console.log("combined string ages:", combinedStringAges);
const combinedNames = combine("Aviva", "Shoshana", "as-string");
console.log("combined name: ", combinedNames);
