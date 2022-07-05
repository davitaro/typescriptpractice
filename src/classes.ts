type employeeStructure = {
  firstName: string;
  lastName: string;
  role: string;
  startDate: string;
};

type employeesList = employeeStructure[];

class Department {
  private employees: employeesList = [];

  constructor(public name: string, private readonly id: string) {
    this.name = name;
    this.id = id;
  }

  describe(this: Department) {
    console.log(`Department: ${this.name} with id: ${this.id}`);
  }
  addEmployee(this: Department, employee: employeeStructure) {
    //first: validation
    this.employees.push(employee);
    console.log("You just added a new employee:", employee);
  }

  printEmployeeInformation() {
    console.log("number of employees:", this.employees.length);
    const filledRoles: string[] = this.employees.map((person) => {
      return person.role;
    });
    console.log("current filled employee roles", filledRoles);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super("IT", id);
    this.admins = admins;
  }
}

const itDepartment = new ITDepartment("123456", ["Max"]);

console.log("it dept:", itDepartment);
const department = new Department("janitorial", "1234567");

department.describe();
itDepartment.describe();

department.addEmployee({
  firstName: "Johan",
  lastName: "Sebastien",
  role: "CEO",
  startDate: new Date().toDateString(),
});

department.addEmployee({
  firstName: "Geraldine",
  lastName: "Scott",
  role: "CTO",
  startDate: new Date().toDateString(),
});

department.addEmployee({
  firstName: "Mimi",
  lastName: "Spirelli",
  role: "programmer",
  startDate: new Date().toDateString(),
});

department.printEmployeeInformation();
itDepartment.printEmployeeInformation();
