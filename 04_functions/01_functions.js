// function sayMyName(){

//     console.log("vaishnavi");
// }

//reference:
//sayMyName;

//execution:
//sayMyName();

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

// addTwoNumbers(3,4);

// addTwoNumbers(3,"4");

// addTwoNumbers(3,"a");

// addTwoNumbers(3,null);

// const result = addTwoNumbers(3,4);
// console.log("Result: "+ result);

function addTwoNumbers(number1, number2){
    // let result = number1 + number2;
    // return result;

    return number1 + number2;
}

//console.log(addTwoNumbers(3,8));

// function loginUserMessage(username){
//     return `${username} just logged in`
// }

// loginUserMessage("vaishnavi");

// console.log(loginUserMessage("vaishnavi"));

// console.log(loginUserMessage());


// function loginUserMessage(username){
//     if(username === undefined){
       
//         console.log("please enter username");
//         return;
//     }
//     return `${username} just logged in`
// }
// console.log(loginUserMessage());



function loginUserMessage(username = "vaishnavi"){
    if(username === undefined){
       
        console.log("please enter username");
        return;
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());
