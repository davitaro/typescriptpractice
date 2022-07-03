"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Davita",
    age: 29,
    hobbies: ["sports", "cooking"],
    favoriteActivities: ["bowling"],
    role: Role.ADMIN,
};
// wierdly allowed: person.role.push("super-admin");
let favoriteActivities;
favoriteActivities = ["making coffee", "reading in bed"];
person.favoriteActivities = favoriteActivities;
console.log(person.name);
for (const activity of person.favoriteActivities) {
    console.log(activity.toUpperCase());
}
console.log(person);
