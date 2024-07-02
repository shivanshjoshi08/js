// if

const isUserLoggedIn = true
const temp = 41

// if (temp < 50) {
//     console.log("less than 50");
// }
// console.log("greter than 50");

// < , > , <= , >= , == , && , || , != , === , !==

const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`user power:${power}`);
// } 


const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// }
// else if (balance < 750) {
//     console.log("less than 750");
// }
// else if (balance < 900) {
//     console.log("less than 900");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;

const loggedinfromgoogle = false;
const loggedinfromemail = true;

// if (userLoggedIn && debitCard) {
//     console.log("can buy course");
// }


// switch (key) {
//     case value:

//         break;

//     default:
//         break;
// }

const month = 3

// switch (month) {
//     case 1:
//         console.log("january");
//         break;
//     case 2:
//         console.log("february");
//         break;
//     case 3:
//         console.log("march");
//         break;
//     case 4:
//         console.log("april");
//         break;

//     default:
//         console.log("chutiya ho ka");
//         break;
// }
// const month = "apr"

// switch (month) {
//     case "jan":
//         console.log("january");
//         break;
//     case "feb":
//         console.log("february");
//         break;
//     case "march":
//         console.log("march");
//         break;
//     case "apr":
//         console.log("april");
//         break;

//     default:
//         console.log("chutiya ho ka");
//         break;
// }

// const userEmail = []
// if (userEmail) {
//     console.log("Got User Email");
// } else {
//     console.log("don't have User Email");
// }

// falsy values

// false, 0, -0, BIgInt 0n, "", null, undefined, NaN 

// truthy values

// "0", 'false', " ", [], {}, function () { }

// if (userEmail.lenght === 0) {
//     console.log("array is empty");
// }

// const emptyObj = {}

// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

// Nullish Coalescing Operator (??) : null undefined 

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 15 ?? 10

console.log(val1);


// Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice > 80 ? console.log("more than 80") : console.log("less than 80");