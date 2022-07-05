"use strict";
var _a;
const fetchedUserData = {
    id: "uid",
    name: "Syncope",
    job: { title: "CEO", description: "I am the head of the whole company" },
};
console.log((_a = fetchedUserData === null || fetchedUserData === void 0 ? void 0 : fetchedUserData.job) === null || _a === void 0 ? void 0 : _a.title);
const myInput = null;
const storedData = myInput !== null && myInput !== void 0 ? myInput : 'Default';
const employee1 = {
    name: "Davita",
    priveleges: ["read", "write"],
    startDate: new Date(),
};
console.log("Employee", employee1);
function combineTwo(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
console.log(combineTwo("1", "6").toString());
console.log(combineTwo(1, 6));
const printEmployeeInformation = (employee) => {
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
    loadCargo(amount) {
        console.log("loading cargo: ", amount, " kg");
    }
}
const v1 = new Car();
const v2 = new Truck();
const useVehicle = (vehicle) => {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo(1000);
    }
};
useVehicle(v1);
useVehicle(v2);
const distanceCovered = (animal, time) => {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    const distance = speed / time;
    console.log(`The distance traveled by the ${animal.type} was ${distance.toFixed(2)} km. That's a lot!`);
    return distance;
};
const myHorse = {
    type: "horse",
    runningSpeed: 30,
};
distanceCovered(myHorse, 1.44);
const input = (document.getElementById("user-input"));
input.value = "yo!";
const errorBag = {
    email: "not a valid email",
    username: "must start with a valid character",
};
console.log("error bag ", errorBag);
