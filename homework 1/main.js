// // task 2

let surname = "Kozlova";
console.log(surname);

// task 3

let name = "Seymour";
let lastName = "Glass";
console.log(name, lastName);

name = lastName;
console.log(name, lastName);

// // task 4

let cat = {
  String: "Tutti",
  Number: 4,
  Boolean: true,
  Undefined: undefined,
  Null: null,
};
console.log(cat);

// // // task 5

const isAdult = confirm("Have you reached adulthood?");
console.log(isAdult);

// task 6
const myName = "Krista";
const familyName = "Kozlova";
const group = "Lv-678.JS Core";
const yearOfBirth = 1988;
const isMarried = false;

console.log(typeof myName);
console.log(typeof familyName);
console.log(typeof group);
console.log(typeof yearOfBirth);
console.log(typeof isMarried);

console.log(yearOfBirth);
console.log(isMarried);
console.log(myName, familyName, group);

let cinelliFan;
let ownsCinelliBike = null;

console.log(typeof ownsCinelliBike);
console.log(typeof cinelliFan);

// // task 7

let userName = prompt("Please enter your login", " ");
let userEmail = prompt("Please enter your email", " ");
let userPassword = prompt("Please enter your password", " ");
alert(
  "Dear " +
    userName +
    "! your email is " +
    userEmail +
    ", " +
    "your password is " +
    userPassword
);

// // task 8

const secondsInAMinute = 60;
const minutesInAnHour = 60;
const secondsInAnHour = secondsInAMinute * minutesInAnHour;
alert("Seconds in a Minute " + " " + secondsInAnHour);

const hoursInADay = 24;
secondsInADay = secondsInAnHour * hoursInADay;
alert("Seconds in a Day" + " " + secondsInADay);

const daysInAMonth = 30;
secondsInAMonth =
  daysInAMonth * hoursInADay * minutesInAnHour * secondsInAMinute;
alert("Seconds in a Month" + " " + secondsInAMonth);
