"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const Logger = (logString) => {
    return function (constructor) {
        console.log(logString);
        console.log("logger constructor", constructor);
    };
};
const withTemplate = (template, hookId) => {
    return function (originalConstructor) {
        return class extends originalConstructor {
            constructor(..._) {
                super();
                console.log("rendering template");
                const hookElement = document.getElementById(hookId);
                if (hookElement) {
                    hookElement.innerHTML = this.name;
                }
            }
        };
    };
};
let Persson = class Persson {
    constructor() {
        this.name = "Max";
        console.log("Creating person object...");
        console.log(`A new persson called ${this.name} has been created.`);
    }
};
Persson = __decorate([
    Logger("Logging - Persson"),
    withTemplate("<h1>My Person Object</h1>", "app")
], Persson);
const newPerson = new Persson();
console.log(newPerson);
const Log = (target, propertyName) => {
    console.log("property decorator: ", { target }, "name", propertyName);
};
const Log2 = (target, name, descriptor) => {
    console.log("Accessory decorator!");
    console.log("target: ", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
};
const Log3 = (target, name, descriptor) => {
    console.log("Method decorator!");
    console.log("target: ", target);
    console.log("name", name);
    console.log("descriptor", descriptor);
};
const Log4 = (target, name, position) => {
    console.log("Parameter decorator!");
    console.log("target: ", target);
    console.log("name", name);
    console.log("position", position);
};
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0) {
            this._price = val;
        }
        throw new Error("Invalid price - should be positive");
    }
    getPriceWithTax(tax) {
        return this.price * (1 + tax);
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
__decorate([
    Log2
], Product.prototype, "price", null);
__decorate([
    Log3,
    __param(0, Log4)
], Product.prototype, "getPriceWithTax", null);
const Autobind = (_, _2, descriptor) => {
    const originalMethod = descriptor.value;
    const adjuDescriptor = {
        configurable: true,
        enumerable: false,
        get() {
            const boundFn = originalMethod.bind(this);
            return boundFn;
        },
    };
    return adjuDescriptor;
};
class Printer {
    constructor() {
        this.message = "This works";
    }
    showMessage() {
        console.log(this.message);
        console.log("hey you clicked me");
    }
}
__decorate([
    Autobind
], Printer.prototype, "showMessage", null);
const p = new Printer();
const button = document.querySelector("button");
button.addEventListener("click", p.showMessage);
const registeredValidators = {};
const RequiredInput = (target, propName) => {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ["required"] });
};
const PositiveNumber = (target, propName) => {
    registeredValidators[target.constructor.name] = Object.assign(Object.assign({}, registeredValidators[target.constructor.name]), { [propName]: ["positive"] });
};
const validate = (obj) => {
    const objValidatorConfig = registeredValidators[obj.constructor.name];
    if (!objValidatorConfig) {
        return true;
    }
    let isValid = true;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case "required":
                    isValid = isValid && obj[prop];
                    break;
                case "positive":
                    isValid = isValid && +obj[prop] > 0;
                    break;
            }
        }
    }
    return isValid;
};
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    RequiredInput
], Course.prototype, "title", void 0);
__decorate([
    PositiveNumber
], Course.prototype, "price", void 0);
const courseForm = document.querySelector("form");
courseForm === null || courseForm === void 0 ? void 0 : courseForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const title = document.getElementById("title");
    const price = document.getElementById("price");
    const newCourse = new Course(title.value, +price.value);
    if (!validate(newCourse)) {
        alert("Invalid input. Please try again.");
    }
    else {
        console.log("new course: ", newCourse);
    }
});
