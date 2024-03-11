function calculateCardPrice(val1,val2,...num1){

    return num1;
}

console.log(calculateCardPrice(3));

console.log(calculateCardPrice(3,200,300,400));

const user = {
    username: "vaishnavi",
    price: 199
}

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user);
handleObject({
    username: "swati",
    price: 1345
})

const myNewArray = [200, 300, 400, 500]

function returnSecondValue(getArray){
    return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue([200,400,500,1000]));

