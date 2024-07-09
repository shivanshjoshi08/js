class User {
    constructor(email, password) {
        this.email = email;
        this.password = password
    }
    get password() {
        return this.password.toUpperCase()
    }
    set password(value) {
        this.password = value.toUppercase()
    }
}

const shivansh = new User("s@shivansh.ai", "123")
console.log(shivansh.password);