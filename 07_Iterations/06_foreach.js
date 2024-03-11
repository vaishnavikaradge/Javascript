//const coding = ["js","ruby","java","python","cpp"];

// const values = coding.forEach( (item) => {
//     console.log(item);
//     return item;
// })

// console.log(values);


const myNums = [1,2,3,4,5,6,7,8,9,10];

// const newNums = myNums.filter( (num) => num>4 ) 
// console.log(newNums);


// const newNums = myNums.filter( (num) => {
//     return num > 4
// } ) 

// console.log(newNums);


// const newNums = [];
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num);
//     }
// })

// console.log(newNums);

const books = [
    {title: 'Book one', genre:'fiction', publish:1981, edition:2004},
    {title: 'Book two', genre:'non-fiction', publish:1982, edition:2005},
    {title: 'Book three', genre:'fiction', publish:1980, edition:2008},
    {title: 'Book four', genre:'history', publish:1987, edition:2006},
    {title: 'Book five', genre:'science', publish:1945, edition:2009},
    {title: 'Book six', genre:'social-science', publish:1956, edition:2004},
    {title: 'Book seven', genre:'story', publish:1975, edition:2003},
    {title: 'Book eight', genre:'fiction', publish:1974, edition:2002},
    {title: 'Book nine', genre:'non-fiction', publish:1997, edition:2001}
];

let userBooks = books.filter((bk) => bk.genre === "history");

 userBooks = books.filter((bk) => { return bk.publish >= 1945 && bk.genre === 'history'})


console.log(userBooks);