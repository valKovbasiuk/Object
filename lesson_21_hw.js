//*----task 1----
let user = {};
user.name = "Vasiliy";
user.surname = "Prohorov";
user.age = 25;
user.phones = {
  "7": "Russia",
  "38": "Ukraine",
  "1": "USA"
};

user.name = "Sergey";
delete user.surname;

//*----task 2----

function printObj(obj) {
  for (key in obj) {
    if (typeof obj[key] === "object") {
      printObj(obj[key]);
    }
    console.log("User " + key + " " + obj[key]);
  }
}

printObj(user);
//*----task 3----
function copyObj(obj) {
  let copy = {};
  for (key in obj) {
    if (typeof obj[key] === "object") {
      copy[key] = copyObj(obj[key]);
    } else {
      copy[key] = obj[key];
    }
  }

  return copy;
}

var student = copyObj(user);

var student = {};
Object.assign(student, user);

let objJson = JSON.stringify(user);
var student = {};
student = JSON.parse(objJson);
user.name = "Tom";
console.log(student.name);

//*----task 4----

Object.defineProperty(user, "isHiddenTalent", { value: true });
let newCopy = copyObj(user);

//*----task 5----

user.bbf = "foo";
Object.defineProperty(user, "country", { value: "Ukraine" });
delete user.country;

//*----task 6----

user.toString = function() {
  return this.name;
};
console.log("His name is " + user);

user.toString = function() {
  return this.age;
};
console.log(user * 2);

console.log(user);
console.log(student);
console.log(newCopy);
