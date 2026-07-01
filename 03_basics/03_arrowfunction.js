const user = {
    username: "priya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "priya"
//     console.log(this.username);
    
// }
// chai()

// const chai = function (){
//     let username = "priya"
//     console.log(this.username);
// }
// chai()

// ++++++++++++ARROW FUNCTION ++++++++++++
const chai = () => {
    let username = "priya"
    console.log(this);
}
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(4, 5));

// +++++++Implicit Return++++++++
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)
// console.log(addTwo(3,5));

const addTwo = (num1, num2) => ({username: "priya"})
console.log(addTwo(3,5));