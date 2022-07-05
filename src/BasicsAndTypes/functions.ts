const sum = (num1: number, num2: number) => {
  return num1 + num2;
};

//return type: void b/c doesn't return anything
//undefined can be a type for a variable, but not return type usually....
const printResults = (num: number) => {
  console.log("result is: ", num);
};

const addAndHandle = (
  num1: number,
  num2: number,
  cb: (num: number) => void
) => {
  const result = num1 + num2;
  cb(result);
};

printResults(sum(5, 12));

//accept any function that accpets two numbers and returns a number
let combinedValues: (a: number, b: number) => number;
combinedValues = sum;
console.log(combinedValues(8, 8));

addAndHandle(3, -2, (result) =>
  console.log("result of add and handle is ", result)
);
