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
// JsUser.greeting();
// JsUser.greeting2()


// Singleton Object
// const tinderUser = new Object()

// Nonsingleton Object
const tinderUser = {}

tinderUser.id = "1234abs"
tinderUser.name = "prateek"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "priya@test.com",
    fullname: {
        usersfullname: {
            firstname: "priya",
            lastname: "chauhan"

        }
    }
}
// console.log(regularUser.fullname.usersfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}

// const obj3 = Object.assign(obj1, obj2)

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4} //most used these days
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "p@mail.com"
    },
    {
        id:2,
        email: "r@mail.com"
    },
    {
        id: 1,
        email: "p@mail.com"
    },
    {
        id:2,
        email: "r@mail.com"
    }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
