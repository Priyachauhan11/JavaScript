// Singleton
Object.create

// object literals
const mySym = Symbol("key1")

const JsUser = {
    name: "Priya",
    "full name": "priya chauhan",
    [mySym]: "key1",
    age: 21,
    location: "Ghaziabad",
    email: "priya@test.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "priya@gpt.com"
// Object.freeze(JsUser)
JsUser.email = "priya@insta.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js User");
    
}
JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this.name}`);
    
}
JsUser.greeting();
JsUser.greeting2()
