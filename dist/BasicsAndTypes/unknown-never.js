"use strict";
let userInput;
let userName;
userInput = 5;
userInput = "davita";
if (typeof userInput === "string") {
    userName = userInput;
}
//return type: never
const generateError = (message, code) => {
    throw { message: message, errorCode: code };
    //while (true) {}
};
generateError("a server error occured. sorry!", 500);
