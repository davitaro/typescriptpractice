interface PPerson {
  name: string;
  age: number;
  location: string;
}

//decorator factories
const Logger = (logString: string) => {
  return function (constructor: Function) {
    console.log(logString);
    console.log("logger constructor", constructor);
  };
};

const withTemplate = (template: string, hookId: string) => {
  return function <T extends { new (...args: any[]): { name: string } }>(
    originalConstructor: any
  ) {
    return class extends originalConstructor {
      constructor(..._: any[]) {
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

@Logger("Logging - Persson")
@withTemplate("<h1>My Person Object</h1>", "app")
class Persson {
  name = "Max";
  constructor() {
    console.log("Creating person object...");
    console.log(`A new persson called ${this.name} has been created.`);
  }
}

const newPerson = new Persson();

console.log(newPerson);
////

const Log = (target: any, propertyName: string | symbol) => {
  console.log("property decorator: ", { target }, "name", propertyName);
};

const Log2 = (target: any, name: string, descriptor: PropertyDescriptor) => {
  console.log("Accessory decorator!");
  console.log("target: ", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
};

const Log3 = (
  target: any,
  name: string | symbol,
  descriptor: PropertyDescriptor
) => {
  console.log("Method decorator!");
  console.log("target: ", target);
  console.log("name", name);
  console.log("descriptor", descriptor);
};

const Log4 = (target: any, name: string | symbol, position: number) => {
  console.log("Parameter decorator!");
  console.log("target: ", target);
  console.log("name", name);
  console.log("position", position);
};
class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
  set price(val: number) {
    if (val > 0) {
      this._price = val;
    }
    throw new Error("Invalid price - should be positive");
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

const Autobind = (_: any, _2: string, descriptor: PropertyDescriptor) => {
  const originalMethod = descriptor.value;
  const adjuDescriptor: PropertyDescriptor = {
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
  message = "This works";

  @Autobind
  showMessage() {
    console.log(this.message);
    console.log("hey you clicked me");
  }
}
const p = new Printer();
const button = document.querySelector("button")!;
button.addEventListener("click", p.showMessage);

interface ValidatorConfig {
  [property: string]: {
    [validationProp: string]: string[]; // 'required'
  };
}

const registeredValidators: ValidatorConfig = {};

const RequiredInput = (target: any, propName: string) => {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"],
  };
};

const PositiveNumber = (target: any, propName: string) => {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"],
  };
};

const validate = (obj: any) => {
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
  @RequiredInput
  title: string;
  @PositiveNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}

const courseForm = document.querySelector("form");

courseForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const title = document.getElementById("title") as HTMLInputElement;
  const price = document.getElementById("price") as HTMLInputElement;
  const newCourse = new Course(title.value, +price.value);
  if (!validate(newCourse)) {
    alert("Invalid input. Please try again.");
  } else {
    console.log("new course: ", newCourse);
  }
});
