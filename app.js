var userInput;
var userName;
userInput = 5;
userInput = "davita";
if (typeof userInput === "string") {
    userName = userInput;
}
var generateError = function (message, code) {
    throw { message: message, errorCode: code };
};
generateError('a server error occured. sorry!', 500);
