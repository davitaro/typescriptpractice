//union types
//literal types
//alias in conjuction with union types


//aliases
type Combinable = number | string;
type ConversionDescriptor = "as-number" | "as-string";

const combine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionDescriptor
) => {
  let result: Combinable;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
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
