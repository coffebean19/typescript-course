"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    describeEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("1", "Accounting");
// console.log(accounting);
accounting.describe();
accounting.addEmployee("Istvan");
accounting.addEmployee("Rolande");
accounting.describeEmployees();
