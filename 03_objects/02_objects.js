//singleton object:
//const tinderUser = new Object();

//non-singleton:
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullname:{
            firstname: "vaishnavi",
            lastname: "karadge"
        }
    }
}

//console.log(regularUser.fullname);

//console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1:"a", 2:"b"};
const obj2 = {3:"c", 4:"d"};
const obj4 = {5:"c", 6:"d"};

// const obj3 = {obj1, obj2};
// console.log(obj3);

// const obj3 = Object.assign(obj1, obj2);
// console.log(obj3);

// const obj3 = Object.assign({},obj1, obj2,obj4);
// console.log(obj3);

// const obj3 = {...obj1,...obj2,...obj4};
// console.log(obj3);

//array of object:
const user = [
    {
        id: 1,
        email: "vaishnavikaradge@gmail.com"
    },
    {
        id: 2,
        email: "vaishnavikaradge@google.com"
    },
    {
        id: 3,
        email: "vaishnavikaradge@microsoft.com"
    }
]

console.log(user[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));

