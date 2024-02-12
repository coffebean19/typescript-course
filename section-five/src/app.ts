abstract class Department {
  protected employees: string[] = [];

  static createEmployee(name: string) {
    return {
      name: name
    }
  }

  constructor(private readonly id: string, private name: string) {
  }

  abstract describe(this: Department): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  describeEmployees() {
    console.log(this.employees.length);
    console.log(this.employees);
  }

}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT Department");
  }

  addEmployee(employee: string): void {
    this.employees.push(employee);
  }

  addAdmin(admin: string): void {
    this.admins.push(admin);
  }

  describeAdmins(): void {
    console.log(this.admins);
  }

  describe(this: Department): void {
    console.log("THis is the IT department");
  }
}

class AccountingDepartment extends Department {

  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    } else {
      throw new Error("No Reports");
    }
  }

  describe(this: Department): void {
    console.log("Somespecil")
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("No report provided");
    } else {
      this.addReport(value);
    }
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting Department");
    this.lastReport = reports[0]
  }

  addReport(report: string): void {
    this.reports.push(report);
    this.lastReport = this.reports[0]
  }

  describeReports(): void {
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