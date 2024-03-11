//Note: to master in js study objects and browser events

// 1. Primitive Data Types:

//7  types: (call by value)
//1.String
//2. Number
//3.Boolean
//4.null
//5.undefined
//6.Symbol
//7.BigInt


const outSideTemp = null;
let userEmail;

const Id = Symbol('123');
const anotherId = Symbol('123');

//console.log(Id === anotherId);

const bigNumber = 3463663546373827n;
//console.log(typeof bigNumber);

//2.Non-Primitive Data Type(Reference Data Type):
//1.Arrays
//2.Object
//3.Functions

//js is dynamically typed language

const heros = ["vaishnavi", "swati", "namrata"];

let myObj = {

    name:"vaishnavi",
    age:23,
}

const myFunc = function(){
    console.log("Hello world");
}

//https://262.ecma-international.org/5.1/#sec-11.4.3






//Stack and Heap Memory:

//stack(primitive), Heap(Non-primitive)

let myYouTubeName = "hiteshChoudhary";

let anotherName = "chaiaurcode"

//console.log(myYouTubeName);

//console.log(anotherName);


let user ={
    email:"usergoogle.com",
    upi:"user@bl",
}

let user2 = user;

user2.email = "hitesh@google.com";

console.log(user.email);
console.log(user2.email);