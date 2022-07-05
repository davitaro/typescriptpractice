"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    describe() {
        console.log(`Department: ${this.name} with id: ${this.id}`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
        console.log("You just added a new employee:", employee);
    }
    printEmployeeInformation() {
        console.log("number of employees:", this.employees.length);
        const filledRoles = this.employees.map((person) => {
            return person.role;
        });
        console.log("current filled employee roles", filledRoles);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
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
