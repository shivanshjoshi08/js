// const user = {
//     username: "shivansh",
//     LoginCount: 8,
//     signedIn: true,

//     getUserDetails: function () {
//         // console.log("Got User Details from Database");
//         // console.log(`username:${this.username}`);
//         console.log(this);
//     }

// }

// console.log(user.getUserDetails());
// console.log(user.username);
// console.log(this); 

// const promiseOne = new Promise()
// const date = new Date()

function user(username, loginCount, isLoggedIn) {
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function () {
        console.log(`welcome ${this.username}`);

    }

    return this
}

const userOne = new user("shivansh", 12, true)
const userTwo = new user("Joshi", 11, false)
console.log(userOne.constructor);

