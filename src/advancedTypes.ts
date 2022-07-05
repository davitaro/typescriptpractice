//type guards, intersection, discriminated union, index types, function overloads, optional chaining, nullish coalescing

const fetchedUserData = {
  id: "uid",
  name: "Syncope",
  job: { title: "CEO", description: "I am the head of the whole company" },
};

console.log(fetchedUserData?.job?.title);

const myInput = null;

const storedData = myInput ?? 'Default'

type Admin = {
  name: string;
  priveleges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//intersection
type ElevatedEmployee = Admin & Employee;

const employee1: ElevatedEmployee = {
  name: "Davita",
  priveleges: ["read", "write"],
  startDate: new Date(),
};

console.log("Employee", employee1);
type MultiOptional = string | number;
type Numeric = number | boolean;

//intersection
type Universal = MultiOptional & Numeric;

function combineTwo(a: number, b: number): number;
function combineTwo(a: string, b: string): string;
function combineTwo(a: MultiOptional, b: MultiOptional) {
  //type guard
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

console.log(combineTwo("1", "6").toString());
console.log(combineTwo(1, 6));

//unknown
type UnknownEmployee = Employee | Admin;

//type guard
const printEmployeeInformation = (employee: UnknownEmployee) => {
  console.log("employee name:", employee.name);
  if ("priveleges" in employee) {
    console.log("bla bla");
  }
  if ("startDate" in employee) {
    console.log("employee start date: ", employee.startDate);
  }
};

printEmployeeInformation(employee1);

class Car {
  drive() {
    console.log("driving...");
  }
}

class Truck {
  drive() {
    console.log("driving a truck..");
  }
  loadCargo(amount: number) {
    console.log("loading cargo: ", amount, " kg");
  }
}

type Vehicle = Car | Truck;

const v1 = new Car();
const v2 = new Truck();

const useVehicle = (vehicle: Vehicle) => {
  vehicle.drive();
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000);
  }
};

useVehicle(v1);
useVehicle(v2);

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

const distanceCovered = (animal: Animal, time: number) => {
  let speed: number;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  const distance: number = speed / time;

  console.log(
    `The distance traveled by the ${animal.type} was ${distance.toFixed(
      2
    )} km. That's a lot!`
  );
  return distance;
};

const myHorse: Horse = {
  type: "horse",
  runningSpeed: 30,
};
distanceCovered(myHorse, 1.44);

//type casting

//example 1
// const input = <HTMLInputElement>document.getElementById("user-input")!;

//example 2
const input = (<HTMLInputElement>(
  document.getElementById("user-input")!
)) as HTMLInputElement;

input.value = "yo!";

//index types
interface ErrorContainer {
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  email: "not a valid email",
  username: "must start with a valid character",
};

console.log("error bag ", errorBag);
