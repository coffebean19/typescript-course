"use strict";
class Department {
    static createEmployee(name) {
        return {
            name: name
        };
    }
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    describeEmployees() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT Department");
        this.admins = admins;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    addAdmin(admin) {
        this.admins.push(admin);
    }
    describeAdmins() {
        console.log(this.admins);
    }
    describe() {
        console.log("THis is the IT department");
    }
}
class AccountingDepartment extends Department {
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        else {
            throw new Error("No Reports");
        }
    }
    describe() {
        console.log("Somespecil");
    }
    set mostRecentReport(value) {
        if (!value) {
            throw new Error("No report provided");
        }
        else {
            this.addReport(value);
        }
    }
    constructor(id, reports) {
        super(id, "Accounting Department");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = this.reports[0];
    }
    describeReports() {
        console.log(this.reports);
    }
}
const employee1 = Department.createEmployee("Gus");
// const department = new Department("1", "Accounting");
// // console.log(accounting);
// department.describe();
// department.addEmployee("Istvan");
// department.addEmployee("Rolande");
// department.describeEmployees();
const it = new ITDepartment("id2", ["Istvan"]);
it.describeAdmins();
const accounting = new AccountingDepartment("id3", []);
accounting.addReport("Oh no");
accounting.describeReports();
accounting.addEmployee("Person rtwo");
accounting.describeEmployees();
accounting.mostRecentReport = "someting";
