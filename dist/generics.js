"use strict";
const merge = (objA, objB) => {
    return Object.assign(objA, objB);
};
const mergedObj = merge({ name1: "Davita" }, { name2: "Joe" });
console.log(mergedObj.name1);
const countAndPrint = (element) => {
    let descriptionText = "Got no value";
    if (element.length > 0) {
        descriptionText = `I've got ${element.length} elements`;
    }
    return [element, descriptionText];
};
const myResult = countAndPrint("standard hello");
const myOtherResult = countAndPrint([1, 2, 3, 4, 5]);
console.log("my Result", myResult);
console.log("my other result", myOtherResult);
const extractAndConvert = (obj, key) => {
    return obj[key];
};
console.log(extractAndConvert({ name: "Shloimy", age: 75 }, "age"));
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("report 1");
console.log(textStorage.getItems());
const objectStorage = new DataStorage();
objectStorage.addItem({ name: "John", age: 30 });
objectStorage.addItem({ name: "Marco", age: 55 });
console.log(objectStorage.getItems());
const createCourseGoal = (title, description, date) => {
    const courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.completeUntil = new Date();
    return courseGoal;
};
console.log(createCourseGoal("TypeScript", "understand typescript basics", new Date()));
const names = ['Max', "Anna"];
names.push("manu");
