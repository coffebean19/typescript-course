// const person: {
//   name: string,
//   age: number
// } = {
enum Role { ADMIN, READ_ONLY_USER, AUTHOR };

const person = {
  name: "Istvan",
  age: 24,
  hobbies: ["Gaming", "Reading"],
  role: Role.ADMIN
};

let favActs: string[]; //any[]
favActs = ["Sports"];

console.log(person);
