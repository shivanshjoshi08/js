// #Primitive
// 7 types : String, Number, Boolean, Null, Undefined, Symbol, BigInt

// const score = 100
// const scorevalue = 100.3

// const isLoggedIN = true
// const outesideTemp = null
// let UserEmail

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// // const bigNumber = 12345678901234n   // BigINt

// const heroes = ["shaktiman", "nagraj"];
// let myObj = {
//     name: "shivansh",
//     age: 20,
// }

// const myFunction = function () {

//     console.log("Hello World");
// }

// console.log(typeof bigNumber);
// console.log(typeof outesideTemp);


// #NonPrimitive or Reference
// Arrays, Objects, Function

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primtive), Heap(Non-Primtive)

let myYoutubename = "shivansh_coder"

let anothername = "myYoutube"
anothername = "shivansh"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "shivansh@google.com"

console.log(userOne.email);
console.log(userTwo.email);