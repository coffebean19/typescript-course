console.log('Time to get begin...');

function add(n1: number, n2: number, result: boolean, phrase: string) {
  // if (typeof n1 !== 'number' || typeof n2 == 'number') {
  // throw new Error("Incorrect input!");
  // }
  const num = n1 + n2;
  if (result) {
    console.log(phrase + num)
  } else {
    return num;
  }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";

add(number1, number2, printResult, resultPhrase);