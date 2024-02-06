// const add = (a: number, b: number = 1) => a + b;

// console.log(add(4, 3));
// console.log(add(5));

const printOut: (a: string | number) => void = output => console.log(output);

const hobbies = ["Hiking", "Reading"]
const activeHobbies = ["Writing"]

activeHobbies.push(...hobbies);

const person = {
  firstName: "John",
  age: 80,
}

// const copiedPerson = person;
// person.name = "Pop";
// console.log(copiedPerson.name)

const copiedPerson = { ...person };
person.firstName = "Other";
console.log(copiedPerson.firstName);

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    // console.log("CurValue:", curResult)
    // console.log("CurResult: ", curResult);
    return curResult + curValue;
  }, 0);
}

console.log(add(1, 2, 5, 8));

const [hobby1, hobby2, ...remainHobies] = hobbies;
console.log(hobby1);

const { firstName, age } = person;
console.log(firstName);