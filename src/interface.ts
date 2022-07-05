interface Greetable {
  name: string;

  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(phrase: string) {
    console.log(`${phrase}, ${this.name}`);
  }
}

let user1= new Person("Jon", 30);

// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(`${phrase}, ${this.name}`);
//   },
// };

user1.greet("Heyy yoo");
