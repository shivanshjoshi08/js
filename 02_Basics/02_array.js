const marvel_heroes = ["ironman", "thor", "spiderman"]
const dc_heroes = ["superman", "batman", "flash"]

marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1]);

// const allHero=marvel_heroes.concat(dc_heroes)
// console.log(allHero);

const all_newHeroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_newHeroes)

const another_array = [1, 2, 3, [4, 5, 6,], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);




// Array.isArray("shivansh")
console.log(Array.from("shivansh"));
console.log(Array.from({ name: "shivansh" }));    //interesting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));