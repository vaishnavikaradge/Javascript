const myNums = [1,2,3];

// const myTotal = myNums.reduce(function (accumulator, current_value) {
//     console.log(`acc: ${accumulator} and curr val: ${current_value}`);
//     return accumulator + current_value;
// },0)

// const myTotal = myNums.reduce( (acc, curr) => acc+curr,0)

// console.log(myTotal);


const shoppingCart = [
    { 
        itemname: "js course",
        price: 3000

    },
    { 
        itemname: "mobile dev course",
        price: 9999

    },
    { 
        itemname: "web dev course",
        price: 4000

    },
    { 
        itemname: "computer course",
        price: 2999

    }
]

const priceToPay = shoppingCart.reduce( (acc,item) => acc + item.price,0)

console.log(priceToPay);
