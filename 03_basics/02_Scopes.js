// var c = 200
let a = 200
if (true){
    let a = 10
    const b = 20
    // var c = 30
    // c = 40
    console.log("inner: ", a);
    
}
console.log(a);
// console.log(b);
// console.log(c);

function one(){
    const username = "priya"

    function Two(){
        const website = "youtube"
        console.log(username);    
    }
    // console.log(website);
    
    Two()
}

// one()

if (true){
    const username = "prateek"
    if(username === "prateek"){
        const website = "youtube"
        console.log(username + website);
    }
    // console.log(website);
}
// console.log(username);

// ++++++++++++++++++interesting+++++++++++++++++++

addOne(5) //does not give error
function addOne(value){
    return value + 1
}
// addOne(5)


// concept of hosting
// addTwo(5)   //give error
const addTwo = function(value){
    return value + 2
}
addTwo(5)