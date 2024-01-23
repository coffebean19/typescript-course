let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "port";

if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { message: message, code: code }
}

generateError("This is an manualy thrown error", 450);