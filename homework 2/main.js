// // homework 2 
// // task 1

let x = 1;
let y = 2;

let res1 = String(x) + String(y);
console.log(res1);
console.log(typeof res1);


let res2 = Boolean(x) + String(y);
console.log(res2);
console.log(typeof res2);


let res3 = Boolean(x) && Boolean(y);
console.log(res3);
console.log(typeof res3);


let res4 = String(Boolean(x)) / y;  
    
console.log(res4);
console.log(typeof res4);


// task 2 


let yourNumber = prompt("Please enter the number", " ");
let evenAndPositive = yourNumber % 2 === 0 && yourNumber > 0;
console.log("evenAndPositive", evenAndPositive)

let isDivisibleBySeven = yourNumber % 7 === 0;
console.log("isDivisibleBySeven", isDivisibleBySeven);


// task 3 

const emptyArray = [];

emptyArray.push(1);
emptyArray.push("string");
emptyArray.push(true);
emptyArray.push(null);
console.log("emptyArray.length", emptyArray.length);

const requestedInfo = prompt("Please enter any value");
emptyArray.push(requestedInfo)
console.log("5th element of array", emptyArray[4]);

emptyArray.shift();
console.log("Empty Array", emptyArray);



// Task 4. 

let cities = ["Rome", "Lviv", "Warsaw"]; 
let joinedCities = cities.join("*");
console.log("Joined Cities", joinedCities);

// Task 5

const isAdult = prompt("Have you reached adulthood? Yes / No ");
if (isAdult === "Yes") {
    console.log("Yep, you're adult");
}
else {
    console.log("Nope, you're too young")
 }


// Task 6

const sideOne = prompt("Please enter the Side One length");
const sideTwo = prompt("Please enter the Side Two length");
const sideThree = prompt("Please enter the Side Three length");

const a = Number(sideOne);
const b = Number(sideTwo);
const c = Number(sideThree);


const sides = [a, b, c];
sides.sort();
const hypotenuse = sides.pop();
const catet1 = sides.pop();
const catet2 = sides.pop();

if (hypotenuse >= catet1 + catet2) {
    console.log("Incorrect data")
}
else {
const p = (a + b + c) / 2;
const s = Math.sqrt(p * (p - a) * (p-b) * ( p - c))
console.log("S", s.toFixed(3));  

const isRightTriangle = Math.pow(catet1, 2) + Math.pow(catet2, 2) === Math.pow(hypotenuse, 2);
console.log("isRightTriangle", isRightTriangle);    
}



// // Task 7 if else

const currentDate = new Date();
const currentHour = currentDate.getHours();
if (currentHour >= 23 || currentHour >= 0   && currentHour < 5) {
    console.log("Good Night");
}
else if (currentHour >= 5 && currentHour < 11) {
        console.log("Good Morning");

}
else if (currentHour >= 11 && currentHour < 17) {
        console.log("Good Afternoon");

}
else {
    console.log("Good Evening");
}
//     // // Task 7 switch

// const currentDate = new Date();
// const currentHour = currentDate.getHours();

// switch (currentHour) {
//     case currentHour >= 23 || currentHour >= 0   && currentHour < 5:
//     console.log("Good Night");
//     break;
//     case  currentHour >= 5 && currentHour < 11:
//     console.log("Good Morning");
//     break;
//     case currentHour >= 11 && currentHour < 17:
//         console.log("Good Afternoon");
//         break;
// default:
//     console.log("Good Evening");
// }






