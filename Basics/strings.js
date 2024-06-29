const name = "shivansh"
const repoCount = 0

// console.log(`My name is ${name} and my Repo count is ${repoCount}`);

const gameName = new String('shivansh-sj')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));
// console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4)
console.log(newString);

// const anotherstring=gameName.slice(0,4)
const anotherstring = gameName.slice(-8, 4)
console.log(anotherstring);

const newStringOne = "    shivansh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://shivansh.com/shivansh%20joshi"

console.log(url.replace('%20', '-'))

console.log(url.includes('shivansh'))
console.log(url.includes('ladki'))

console.log(gameName.split('-'));