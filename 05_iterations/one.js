//for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        // console.log("5 is Best");
    }
    // console.log(element);
}

// console.log(element);

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer Loop value: ${i}`);
    for (let j = 1; j <= 10; j++) {
        // const element = i;
        // console.log(`Inner Loop value ${j} and Outer Loop Value ${i} `);
        // console.log(i + '*' + j + '=' + i * j);
    }

}

let myArr = ["flash", "batman", "superman"]
console.log(myArr.length);
for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log(element);
}

//  break and continue

// for (let index = 1; index <= 20; index++) {

//     if (index == 5) {
//         console.log(`5 mil gya`);
//         break;
//     }
//     console.log(index);

// }
for (let index = 1; index <= 20; index++) {

    if (index == 5) {
        console.log(`5 mil gya`);
        continue;
    }
    console.log(index);

}