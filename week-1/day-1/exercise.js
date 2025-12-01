
// 1.  single line comment

/*
2. multi-line comment
*/

// 3. declring variables with let and log them
let name ="john";
console.log(name);
typeof name; // string
let age = 30;
console.log(age);
typeof age; // number
let ismarried = false;
console.log(ismarried);
typeof ismarried; // boolean
let address;
console.log(address);
typeof address; // undefined
let salary = null;
console.log(salary);
typeof salary; // object

// 4. declaring constants with const and log them
const gender = "male";
console.log(gender)
typeof gender; // string

const pi = 3.14;
console.log(pi);
typeof pi; // number
// 5. concatentate and manipulate strings
let firstName = "John";
let lastName ="Daniel";
console.log("Student Name: " + firstName + " " + lastName);
console.log(`Student Name: ${firstName} ${lastName} Age: ${age}`); // using template literals

// 6. perform bsic arithmetic with numbers
let number1 = 10;
let number2 = 5;
let sum = number1 + number2;
let sub = number1 - number2;
let mul = number1 * number2;
let div = number1 / number2;
let mod = number1 % number2;
console.log(number1 + " - " + number2 + " = " + sum); // 10
console.log(number1 + " - " + number2 + " = " + sub); // 5
console.log(number1 + " - " + number2 + " = " + mul); // 50
console.log(number1 + " - " + number2 + " = " + div); // 2
console.log(number1 + " - " + number2 + " = " + mod); // 0


// 7. create booleans and use logic 
let marks = 85;
let passed = marks > 55;
console.log("Has the student passed? " + passed); // true

// 8. compare undefined and null values
let address2;
let address3 = null;
// == checks only value and not type
let isEqulal = address2 == address3; // true 
// === checks value and type
let isStrictEqual = address2 === address3; // false

// 9. explore typeof including typeof null
console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof ismarried); // boolean
console.log(typeof address); // undefined
console.log(typeof salary); // object //null values in js are typeof object 
