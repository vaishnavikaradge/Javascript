//singleton

//object.create

//object literals

const mySym = Symbol("key1");

const JsUser = {
    name: "vaishnavi",
    "full name": "Vaishnavi Karadge",
    [mySym]: "myKey1",
    age: 23,
    location: "Kolhapur",
    email: "vaishnavikaradge@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"] 
};

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email = "vaishnavikaradge@gmail.com";
//Object.freeze(JsUser);
JsUser.email = "vaishnavikaradge@microsoft.com";
console.log(JsUser);


JsUser.greeting = function(){
    console.log("hello JsUser");
}

console.log(JsUser.greeting);
console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`hello JsUser,${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
