const user = {
    username: "shivansh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    }
    //  console.log(this);
}

// user.welcomeMessage
// user.username="sam"
// user.welcomeMessage()

// console.log(this);


// function coffee() {
//     let username = "shivansh"
//     console.log(this.username);
// }

// coffee()

// const coffee = function () {
//     let username = "shivansh"
//     console.log(this.username);
// }

// const coffee = () => {
//     let username = "shivansh"
//     console.log(this.username);
// }
// coffee()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({ username: "shivansh" })

console.log(addTwo(3, 4));


const myArray = [2, 5, 3, 4, 7]

// myArray.forEach(element => {}); 
