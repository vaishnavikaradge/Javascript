//Scopes:

// let a = 10;
// const b = 20;
//var c = 30;

{}


// console.log(a);
// console.log(b);
//console.log(c);

// let a = 300;
// if(true){
//     let a = 10;
//     const b = 20;
//     //var c = 30;

//     console.log("Inner: ",a);

// }

// console.log(a);


// function one(){
//     const username = "vaishnavi";

//     function two(){
//         const website = "youtube";
//         console.log(username);
//     }
//     //console.log(website);

//     two();
// }

// one();



// if(true){
//     const username = "vaishnavi";
//     if(username === "vaishnavi"){
//         const website = "youtube";
//         console.log(username + website);
//     }
//     //console.log(website);
// }
//console.log(username);


//++++++++++++++++++++++++++++++Interesting++++++++++++++++++++++++++++++++

let result = addone(5);
console.log(result);

function addone(num){

    return num+1;

}

// let result = addone(5);
// console.log(result);


console.log(addTwo(5));

const addTwo = function(num){
    return num+2;
}
// console.log(addTwo(5));