const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, curVal) {
//     console.log(`${acc},${curVal}`);
//     return acc + curVal
// }, 0)return 

// const myTotal = myNums.reduce((acc, cur) => {
//     return acc + cur
// }, 0)

// console.log(myTotal);





const ShoppingCart = [
    {
        itemName: "js Course",
        Price: 2999,
    },
    {
        itemName: "python Course",
        Price: 999,
    },
    {
        itemName: "ML Course",
        Price: 4999,
    },
    {
        itemName: "DS Course",
        Price: 12999,
    },
]

const pricetopay = ShoppingCart.reduce((acc, item) => {
    return acc + item.Price
}, 0)

console.log(pricetopay);