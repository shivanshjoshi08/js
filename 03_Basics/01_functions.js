function sayMyName() {
    console.log("S");
    console.log("H");
    console.log("I");
    console.log("V");
    console.log("A");
    console.log("N");
    console.log("S");
    console.log("H");
}


// sayMyName// refernce

// sayMyName()

// function sumTWo(num1, num2) {
//     console.log(num1 + num2)
// }

function sumTWo(num1, num2) {
    // let res = num1 + num2
    // return res
    // console.log("shivansh");

    return num1 + num2
}

const res = sumTWo(3, 5)
// console.log("Result:", res);

function loginUserMessage(username = "sam") {
    if (!username) {
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shivansh"))

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));


const user = {
    username: "shivansh",
    prices: 199,
}

function handleObject(anyobject) {
    console.log((`username is ${anyobject.username} and price is ${anyobject.price}`));
}
// handleObject(user)

handleObject({
    username: "sam",
    prices: 399,
})

const myNewArr = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(myNewArr));
console.log(returnSecondValue[200, 400, 500, 2000]);