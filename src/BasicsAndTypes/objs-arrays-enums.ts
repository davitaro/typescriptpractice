// const person : {
//     name: string;
//     age: number;
//     hobbies: string[];
//     favoriteActivities: string[];
//     role: [number, string]
// }= {
//   name: "Davita",
//   age: 29,
//   hobbies: ["sports", "cooking"],
//   favoriteActivities: ["bowling"],
//   role: [2, "admin"],
// };

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

const person = {
  name: "Davita",
  age: 29,
  hobbies: ["sports", "cooking"],
  favoriteActivities: ["bowling"],
  role: Role.ADMIN,
};

// wierdly allowed: person.role.push("super-admin");

let favoriteActivities: string[];
favoriteActivities = ["making coffee", "reading in bed"];

person.favoriteActivities = favoriteActivities;

console.log(person.name);

for (const activity of person.favoriteActivities) {
  console.log(activity.toUpperCase());
}

console.log(person);
