"use strict";
let add;
add = (n, o) => {
    return n + o;
};
class Person {
    constructor(n) {
        this.age = 30;
        if (n) {
            this.name = n;
        }
    }
    greet(phrase) {
        if (this.name) {
            console.log(phrase + ' ' + this.name);
        }
        else {
            console.log("Hi");
        }
    }
}
let user1;
user1 = new Person();
user1.greet();
