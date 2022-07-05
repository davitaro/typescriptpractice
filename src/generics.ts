//generics, utility types

// const names: Array<string | number> = ["Max", "Davita", 1, 2];

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve("This has completed!");
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data);
// });

//type constraints
const merge = <T extends object, U extends object>(objA: T, objB: U) => {
  return Object.assign(objA, objB);
};

//types are defined dynmaically when you CALL the function!
const mergedObj = merge({ name1: "Davita" }, { name2: "Joe" });
console.log(mergedObj.name1);

interface Lengthy {
  length: number;
}
const countAndPrint = <T extends Lengthy | Array<any>>(
  element: T
): [T, string] => {
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

const extractAndConvert = <T extends object, U extends keyof T>(
  obj: T,
  key: U
) => {
  return obj[key];
};

console.log(extractAndConvert({ name: "Shloimy", age: 75 }, "age"));

class DataStorage<T> {
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item);
  }
  removeItem(item: T) {
    //if we don't find item, i.e. object
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }

  getItems() {
    return [...this.data];
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("report 1");
console.log(textStorage.getItems());

//really only works with primitive data types since references vs copy
const objectStorage = new DataStorage<object>();
objectStorage.addItem({ name: "John", age: 30 });
objectStorage.addItem({ name: "Marco", age: 55 });
console.log(objectStorage.getItems());

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const createCourseGoal = (
  title: string,
  description: string,
  date: Date
): CourseGoal => {
  const courseGoal: Partial<CourseGoal> = {};
  courseGoal.title = title;
  courseGoal.description = description;
  courseGoal.completeUntil = new Date();
  return courseGoal as CourseGoal;
};

console.log(
  createCourseGoal("TypeScript", "understand typescript basics", new Date())
);

const names: readonly string[] = ['Max', "Anna"]
// names.push("manu")