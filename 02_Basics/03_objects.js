//  singleton 

//  object literals

// const js_user = {}
// Object.create

const mySym = Symbol("key1")

const js_user = {
    name: "shivansh",
    "full name": "Shihvansh Joshi",
    [mySym]: "mykey1",
    age: 20,
    location: "delhi",
    email: "sj@google.com",
    isLoggedin: false,
    lastlogindays: ["Monday", "Saturday"]
}

// console.log(js_user.email);
// console.log(js_user["email"]);
// console.log(js_user["full name"]);
// console.log(js_user[mySym]);

js_user.email = "sj@fb.com"
// Object.freeze(js_user)
js_user.email = "sj@gpt.com"
// console.log(js_user);

js_user.greeting = function () {
    console.log("hello js user");
}

js_user.greeting2 = function () {
    console.log(`hello js user,${this.name}`);
}

console.log(js_user.greeting());
console.log(js_user.greeting2());