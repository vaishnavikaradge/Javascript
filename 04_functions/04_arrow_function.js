//this : current context
const user = {
    username: "vaishnavi",
    price: 999,
    

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website `);
        console.log(this);    
    }
}

//user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai(){
//     let username = "vaishnavi";
//     console.log(this.username);
// }
// chai();

// const chai = function(){
//     let username = "vaishnavi";
//     console.log(this.username);
// }

//chai();


// const chai =() =>{

//     let username= "vaishnavi";
//     console.log(this);
// }
// chai();


//arrow function syntax:
//() => {}

// const addTwo = (num1, num2) =>{
//     return num1+num2;

// }

//console.log(addTwo(3,5));


//implicite function
// const addTwo = (num1, num2) =>  num1+num2;

// console.log(addTwo(5,4));

// const addTwo = (num1, num2) =>  (num1+num2);

// console.log(addTwo(5,4));

const addTwo = (num1, num2) =>  ({username:"vaishnavi"});

console.log(addTwo(5,4));


const myArray = [2,3,4,5,6];
// myArray.forEach(function () {} )

// myArray.forEach(() => {} )


