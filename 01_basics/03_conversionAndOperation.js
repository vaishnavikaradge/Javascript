//1.Conversion of Data Types:

let score = "33abc";
score = null;
score = true;
score = "Vaishnavi";

console.log(typeof score);
console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof valueInNumber);

console.log(valueInNumber);

//"33" => 33
//"33abc" => NaN(not a number)
//true => 1, false => 0 


let isLogedIn = 1;
isLogedIn = "";
isLogedIn = "Vaishnavi";

let booleanIsLogedIn = Boolean(isLogedIn);
console.log(booleanIsLogedIn);


//1 => true  0 => false
//"" => false
//"Vaishnavi" => true

let someNumber = 33

let stringNumber = String(someNumber);

console.log(stringNumber);

console.log(typeof stringNumber);


//**********************Operations**************************

//2.Operations:

let value = 3;
let negValue = -value;

// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello ";
let str2 = "Vaishnavi";

let str3 = str1 + str2;

// str3 = str2 + str2;

// str3 = str2 + str1;

//console.log(str3);

// console.log("1"+2);
// console.log(1+"2");
// console.log("1"+"2");
// console.log("1"+2+2);
// console.log(1+2+"2");

// console.log(true);
// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2

//console.log(num1);

let gameCounter = 100;
//gameCounter++;

++gameCounter;
console.log(gameCounter);