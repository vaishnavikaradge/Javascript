const accountId = 14453;
let accountEmail = "vaishnavikaradge@gmail.com";
var accountPassword = "12345";
accountCity = "Kolhapur";

//accountId = 2;  //not allowed

accountEmail = "vk@vk.com";
accountPassword = "21212121";
accountCity = "Bengluru";
let accountState;

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);