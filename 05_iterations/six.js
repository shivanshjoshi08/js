// const coding = ["java", "cpp", "python", "ruby", "js"]

// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })

// console.log(values);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNums.filter((num) => {
//     return num > 4
// })

// const newNums = []

// myNums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })
// console.log(newNums);

const books = [
    { title: 'Book One', genre: 'Fiction', Publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', Publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', Publish: 1999, edition: 2007 },
    { title: 'Book four', genre: 'Non-fiction', Publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', Publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', Publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', Publish: 1986, edition: 21996 }
];

// const userBooks = books.filter((bk) => {
//     return bk.genre === 'History'
// })

const userBooks = books.filter((bk) => {
    return bk.Publish >= '1995' && bk.genre === 'History'
})
console.log(userBooks);

