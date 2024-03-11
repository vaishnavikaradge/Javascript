const name = "Vaishnavi ";
const repoCnt = 50;

// console.log(name + repoCnt);

// console.log(`Hello my name is ${name} and my repo count is ${repoCnt}`);

//declaring String:
const gameName = new String("Vaishnavi");

console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('s'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "   Vaishnavi   ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://vaishnavi.com/vaishnavi%20karadge";

console.log(url.replace('%20', '-'));

console.log(url.includes('sunder'));

console.log(gameName.split('-'));

console.log(gameName.anchor());

console.log(gameName.blink());

console.log(gameName.concat(' karadge'));
