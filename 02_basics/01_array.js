const myArr = [0, 1, 2, 3, 4, 5]
const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array  Methods

// myArr.push(6)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));

// console.log(myArr.indexOf(3));

const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);

// slice, splice

// console.log("A", myArr);

const myn1 = myArr.slice(1,3)
// console.log(myn1);

// console.log("B", myArr);

const myn2 = myArr.splice(1, 3)
// console.log(myn2);

// console.log("C", myArr);

const myFruits = ["Apple", "Banana", "Mango"]
const myVegitable = ["Tomato", "chilli", "Pumpkin"]

// myFruits.push(myVegitable)

// console.log(fruits);
// console.log(fruits[3][1]);

// const newFruits = myFruits.concat(myVegitable)
// console.log(newFruits);

// Spread Operator
const all_new = [...myFruits, ...myVegitable]
// console.log(all_new);

const another_arry = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_arry.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Priya"))
console.log(Array.from("Priya"));

console.log(Array.from({name: "priya"})); //intersting case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
