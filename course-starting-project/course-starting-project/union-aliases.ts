type Combinable = number | string;

type ConversionType = "as-text" | "as-number"

function combine(input1: Combinable, input2: Combinable, resultConversion: ConversionType) {
  let combined;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === "as-number") {
    combined = +input1 + +input2;
  } else {
    combined = input1.toString() + input2.toString();
  }
  return combined;
}

const combineNumbers = combine(12, 23, "as-number");
console.log(combineNumbers);

const typeCombined = combine("15", "43", "as-number")
console.log(typeCombined);

const combineName = combine("Istvan", "Rolande", "as-text");
console.log(combineName);

