const add = (a: number, b: number) => a + b;

console.log(add(4, 3));

const printOut: (a: string | number) => void = output => console.log(output);

printOut(3)