function add(n1: number, n2: number) {
  return n1 + n2;
}

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add(5, 12));

let combine: (a: number, b: number) => number;

combine = add;

console.log(combine(4, 5));
// combine = printResult;

