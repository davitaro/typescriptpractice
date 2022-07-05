interface PPerson {
  name: string;
  age: number;
  location: string;
}

const Logger = (logString: string) => {
  return function (constructor: Function) {
    console.log("Logging...");
    console.log("log string: ", logString);
    console.log(constructor);
  };
};

@Logger("I'm logging but I'm a little confused...")
class Persson {
  name = "Max";
  constructor(name: string) {
    this.name = name;
    console.log("Creating person object...");
    console.log(`A new persson called ${this.name} has been created.`);
  }
}

const newPerson = new Persson("Shprintzy");

console.log(newPerson);
