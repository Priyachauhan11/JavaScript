// primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 32344653345654n
console.log(typeof(bigNumber));

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "nagraj"]

let myObj = {
    name: "priya",
    age: 22,
}

const myFunction = function(){
    console.log("hello world");
    
}