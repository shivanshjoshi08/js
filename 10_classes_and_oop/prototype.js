// let myName = "shivansh     "


// console.log(myName.trueLength);


let myHeroes = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`spideer power is ${this.spoderman}`);
    }
}

Object.prototype.shivansh = function () {
    console.log(`shivansh is present in all objects`);
}

Array.prototype.heyShivansh = function () {
    console.log(`Shivansh says Hello`);
}

// heroPower.shivansh()
myHeroes.shivansh()

const user = {
    name: "coffee",
    email: "coffee@example.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: true
}

const TASupport = {
    makeAssignment: 'Js assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = user

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "GetToWork        "

String.prototype.trueLength = function () {
    // console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True Length is: ${this.trim().length} `);
}

anotherUsername.trueLength()
"shivansh          ".trueLength()
"icetea".trueLength()