class User {
    constructor(username) {
        this.username = username
    }

    LogMe() {
        console.log(`USERNAME is ${this.usernaame}`);
    }
}

class Teacher extends User {
    constructor(username, email, password) {
        super(username)
        this.email = email
        this.password = password
    }


    addCourse() {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai =new Teacher("chai", "chai@example.com", '123')

chai.addCourse()
const masalaChai=new User("masalChai")

masalaChai.LogMe()

console.log(chai instanceof User);
