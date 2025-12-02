//Why type casting necessay?
//data conversion

// 1. converting string to number
let value = "43";
// console.log(value + 20)
// console.log(parseInt(value) + 20)
// console.log(parseFloat(value) + 20)
console.log(Number(value) + 20);

// 2. converting number to string
let age = 32;

let pi = 3.223;

console.log(String(age) + typeof String(age));
console.log(pi.toString());

// 3. Boolean True and False value

console.log(Boolean(1));
console.log(Boolean("1"));
console.log(Boolean(0));
console.log(Boolean("0"));

// Strings are a collection character
//String concatenationn

let firstName = "Hana";
let lastName = "Alemayehu";
let middleName = "Debay";
let fullName = firstName + " " + lastName;

console.log(fullName);

// templet litrals we can pass values inside it
let userName = `${firstName} ${middleName} ${lastName}`;
console.log(userName);

//String length the .length property

let password = "qwerty";
if (password.length > 8) {
  console.log("Please put the approprate lenght for your password");
} else {
  console.log("You can proceed");
}
console.log(password.length);

// accesing characters: indexing

console.log(password[0]);

let initial = `${firstName[0]} ${lastName[5]}`;
let initial2 = `${firstName[firstName.length - 1]} ${
  lastName[lastName.length - 1]
}`;
console.log(initial);
console.log(initial2);
for (i = 0; i <= password.length; i++) {
  console.log(password[i]);
}

//

console.log(firstName.toLocaleUpperCase());
console.log(userName.toLocaleLowerCase());
console.log(fullName.toLocaleUpperCase());

// let capitalized = `${firstName[0].toLocaleUpperCase()} ${firstName.slice(1)}`
// console.log(capitalized)

function capitalized(str) {
  return `${str[0].toLocaleUpperCase()}${str.slice(1)}`;
}
console.log(capitalized("hanadebay"));

//trim
function removeSpaces(str1){
    return `${strimmedString=str1.trim()}`
}
console.log(removeSpaces("Hana   Debay"))
//split
userName = "Hana Debay";
let splitUserName = userName.split(" ")
splitUserName = userName.split("")
console.log(userName)
console.log(splitUserName)
console.log(splitUserName[0], splitUserName[1])

//replace
let anthem = "Oh Uganda"
console.log(anthem);
console.log(anthem.replace("Uganda", "Ethiopia"))