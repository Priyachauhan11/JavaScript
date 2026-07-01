// if statement

// if(2=="2"){
//     console.log("execute");
    
// }

const score = 200
if (score > 100) {
    let power ="fly"
    // console.log(`user power: ${power}`);
    
}
// console.log(`user power: ${power}`);


const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500) {
//     console.log("less than 500");   
// } else if (balance < 750) {
//     console.log("less than 750");    
// }else if (balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1200");
    
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard){
    console.log("allowed to buy course");
    
}

if (loggedInFromEmail || loggedInFromGoogle) {
    console.log("user logged in");
    
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10
// val1 = undefined ?? 4
// val1 = null ?? 2
val1 = null ?? 3 ?? 6
// console.log(val1);

// +++++++++++++Terniary Operator+++++++++++++

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");

