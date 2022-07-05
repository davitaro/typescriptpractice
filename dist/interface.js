"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(`${phrase}, ${this.name}`);
    }
}
let user1 = new Person("Jon", 30);
user1.greet("Heyy yoo");
