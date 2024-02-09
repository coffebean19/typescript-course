class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, private name: string) {
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
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

