function addTwoNumbers(num1, num2){
    // const result = num1 + num2
    // return result
    return num1 + num2
}

const result = addTwoNumbers(3, 4)
// console.log(result);

function loginUserMessage(username){
    if (!username){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("priya"))
// console.log(loginUserMessage());


// shopping cart problem
// Rest Operator (...num)
function calculateCartPrice(val1, val2, ...num1){
    return num1
}

// console.log(calculateCartPrice(200, 400, 300, 4000));

const user = {
    username: "priya",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200 , 300, 100, 400]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 300, 5000]));
